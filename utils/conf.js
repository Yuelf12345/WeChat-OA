
const grant_type = "client_credential";
const appid = "wxd1e6d90b2cf30e58";
const appsecret = "d61b61d1b491c57308426a4f9db703c3";
const token = "yue";
let access_token = null;

const GET_TOKEN_URL = "https://api.weixin.qq.com/cgi-bin/token"; // 获取accessToken

module.exports = {
    grant_type,
    appid,
    appsecret,
    token,
    access_token,
    GET_TOKEN_URL
};