'use strict';

const Router = require('koa-router'),
    UserService = require('m_user').UserService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.post('/', async (ctx) => {
    let data = null;
    const json = JSON.parse(ctx.request.body);
    if(json) {
        const service = new UserService(),
            result = await service.register(json.username, json.password);
        if(result !== true) {
            data = JDW.failure('用户名已存在！');
        }
        else {
            data = JDW.success({ username: json.username });
        }
    }
    else {
        data = JDW.failure();
    }
    ctx.response.body = data;
});

module.exports = router;

