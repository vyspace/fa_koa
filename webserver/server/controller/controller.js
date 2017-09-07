'use strict';

const login = require('../action/login'),
    home = require('../action/home'),
    mobile = require('../action/mobile');

function controller(router) {
    router.use('/admin', login.routes(), login.allowedMethods());
    router.use('/admin/home', home.routes(), home.allowedMethods());
    router.use('', mobile.routes(), mobile.allowedMethods());
    //router.use('/login', mobile.routes(), mobile.allowedMethods());
}

module.exports = controller;