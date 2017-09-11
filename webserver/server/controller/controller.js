'use strict';

const Router = require('koa-router'),
    spa = require('../action/spa'),
    login = require('../action/login'),
    register = require('../action/register'),
    controller = new Router();

controller.use('/:action', spa.routes(), spa.allowedMethods());
controller.use('/openapi/login', login.routes(), login.allowedMethods());
controller.use('/openapi/register', register.routes(), register.allowedMethods());

controller.get('/', async (ctx) => {
    await ctx.render('spa');
});

module.exports = controller;
