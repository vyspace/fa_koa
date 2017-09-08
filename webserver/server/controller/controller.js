'use strict';

const Router = require('koa-router'),
    api = require('../action/api'),
    controller = new Router();

controller.get('/', async (ctx) => {
    await ctx.render('mobile');
}).get('/:action', async (ctx) => {
    await ctx.render('mobile');
}).all('/:action/:handler', async (ctx) => {
    if(ctx.params.action === 'openapi') {
        ctx.response.body = await api(ctx.params.handler);
    }
    else {
        ctx.status = 404;
    }
});

module.exports = controller;
