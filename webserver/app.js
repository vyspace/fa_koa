'use strict';

const Koa = require('koa'),
    path = require('path'),
    bodyParser = require('koa-bodyparser'),
    koaBody = require('koa-body'),
    koaStatic = require('koa-static'),
    koaSession = require('koa-session2'),
    koaNunjucks = require('koa-nunjucks-2'),
    cors = require('koa-cors'),
    mDao = require('m_dao'),
    serverConfig = require('./server-config.json'),
    controller = require('./server/controller/controller'),
    app = new Koa(),
    webContent = './server/webContent';

// 配置body解析
app.use(bodyParser());
app.use(koaBody());
// 配置静态资源加载
app.use(koaStatic(path.join(__dirname, `${webContent}/static`)));
// 配置session
app.use(koaSession({
    key: 'SESSION_ID'
}));

// 配置模版引擎
app.use(koaNunjucks({
    path: path.join(__dirname, `${webContent}/views`),
    nunjucksConfig: {
        trimBlocks: true
    }
}));

// 跨域设置
app.use(cors());

// 配置路由控制器
app.use(controller.routes());

mDao.test().then(() => {
    app.listen(serverConfig.port, () => {
        global.FAKOA = {
            rootdir: __dirname
        };
        console.log(`start-quick is starting at port ${serverConfig.port}`);
    });
}).catch((err) => {
    console.log(err);
    process.exit();
});

