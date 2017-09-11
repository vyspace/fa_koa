'use strict';

const JDW = require('../util/JsonDataWrap'),
    UserService = require('m_user').UserService;

const login = async () => {
    const u = ctx.request.body.username;
    const service = new UserService(),
        result = await service.login('test01');
}

const api = async (handler) => {
    let data;
    switch (handler) {
        case 'resister':
            data = JDW.success(register);
            break;
        case 'login':
            data = JDW.success(login());
            break;
        default:
            data = JWD.failure();
            break;
    }
    return data;
};

module.exports = api;

