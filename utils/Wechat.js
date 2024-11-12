const axios = require("axios");
const { grant_type, appid, appsecret, GET_TOKEN_URL } = require('./conf');


//定义类，获取access_token
class Wechat {
    constructor(access_token, expires_in) {
        this.access_token = access_token || null;
        this.expires_in = expires_in || null;
        this.user_list = null;
    }
    getAccessToken() {
        const url = `${GET_TOKEN_URL}?grant_type=${grant_type}&appid=${appid}&secret=${appsecret}`;
        //返回一个promise，保证接口所有的状态都能正常返回
        return new Promise((resolve, reject) => {
            axios.get(url).then(res => {
                res.data.expires_in = Date.now() + (res.data.expires_in - 300) * 1000;
                console.log('获取token:', res.data);
                resolve(res.data);
            }).catch(err => {
                reject('获取token:' + err);
            })
        })
    }
    //保存access_token，将入参保存为文件
    saveAccessToken({ access_token, expires_in }) {
        this.access_token = access_token;
        this.expires_in = expires_in;
    }

    //判断access_token是否有效
    isVaildAccessToken() {
        if (!this.access_token || !this.expires_in) {
            return false;
        }
        return this.expires_in > Date.now();
    }

    // 获取access_token
    fetchAccessToken() {
        return new Promise((resolve, reject) => {
            if (this.isVaildAccessToken()) {
                resolve({ access_token: this.access_token, expires_in: this.expires_in });
            } else {
                this.getAccessToken().then((res) => {
                    this.saveAccessToken(res);
                    resolve(res);
                }).catch(err => {
                    reject('fetchAccessToken: ' + err);
                });
            }
        });
    }
}
module.exports = Wechat;