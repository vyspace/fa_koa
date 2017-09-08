'use strict';

const JDW = require('../util/JsonDataWrap'),
    UserService = require('m_user').UserService;

const api = async (handler) => {
    let service,
        result,
        data;
    switch (handler) {
        case 'resister':
            data = JDW.success(register);
            break;
        case 'login':
            service = new UserService();
            result = await service.login('test01');
            data = await JDW.success(result);
            break;
        default:
            data = JWD.failure();
            break;
    }
    return data;
};

module.exports = api;

