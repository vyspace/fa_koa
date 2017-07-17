'use strict';

const login = require('../action/login'),
    home = require('../action/home');

function controller(router) {
    router.use('/admin', login.routes(), login.allowedMethods());
    router.use('/admin/home', home.routes(), home.allowedMethods());
}

module.exports = controller;