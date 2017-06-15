'use strict';
const Koa = require('koa'),	
	path = require('path'),
	bodyParser = require('koa-bodyparser'),
	koaStatic = require('koa-static'),
	koaSession = require("koa-session2"),
	koaNunjucks = require('koa-nunjucks-2'),
	Router = require('koa-router'),
	config = require('./config'),
	app = new Koa(),
	router = new Router(),
	webContent = './server/webContent';

//配置body解析
app.use(bodyParser());
//配置静态资源加载
app.use(koaStatic(path.join(__dirname, webContent+'/static')));
//配置session
app.use(koaSession({
	key: 'SESSION_ID'
}));
//配置模版引擎
app.use(koaNunjucks({
	path: path.join(__dirname, webContent+'/views'),
	nunjucksConfig: {
		trimBlocks: true
	}
}));
//配置路由
app.use(router.routes()).use(router.allowedMethods());

app.listen(config.server.port);
console.log('start-quick is starting at port '+config.server.port);