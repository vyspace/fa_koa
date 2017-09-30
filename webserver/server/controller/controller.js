'use strict';

const Router = require('koa-router'),
    spa = require('../action/spa'),
    home = require('../action/home'),
    login = require('../action/login'),
    register = require('../action/register'),
    regfinish = require('../action/regfinish'),
    myinfo = require('../action/myinfo'),
    controller = new Router();

controller.use('/:action', spa.routes(), spa.allowedMethods());
controller.use('/openapi/home', home.routes(), home.allowedMethods());
controller.use('/openapi/login', login.routes(), login.allowedMethods());
controller.use('/openapi/register', register.routes(), register.allowedMethods());
controller.use('/openapi/regfinish', regfinish.routes(), regfinish.allowedMethods());
controller.use('/openapi/myinfo', myinfo.routes(), myinfo.allowedMethods());

controller.get('/', async (ctx) => {
    await ctx.render('spa');
});

module.exports = controller;
