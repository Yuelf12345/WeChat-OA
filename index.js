const axios = require('axios');
const Koa = require('koa');
const bodyParser = require('koa-bodyparser');
const Router = require('koa-router');

// const Wechat = require('./utils/Wechat');

// const wx = new Wechat();


const app = new Koa();
const router = new Router();

app.use(bodyParser());


// 定义路由
// router.get('/', async (ctx) => {
//     console.log('GET请求');
//     ctx.body = '欢迎使用微信云托管！';
// });


router.post('/', async (ctx) => {
    console.log('消息推送', ctx.request.body);
    const { ToUserName, FromUserName, MsgType, Content, CreateTime } = ctx.request.body;
    console.log('ToUserName', ToUserName);
    console.log('FromUserName', FromUserName);
    console.log('MsgType', MsgType);
    console.log('Content', Content);

    console.log('token', wx.access_token);

    ctx.body = {
        ToUserName: FromUserName,
        FromUserName: ToUserName,
        CreateTime: CreateTime,
        MsgType: 'text',
        Content: '想你了 小宝'
    };
});

// 使用路由
app.use(router.routes()).use(router.allowedMethods());

const PORT = process.env.PORT || 80;
async function bootstrap() {
    // await wx.fetchAccessToken();
    app.listen(PORT, () => {
        console.log("启动成功", PORT);
    });
}
bootstrap();