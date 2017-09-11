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
            result = await service.login(json.username);
        if(!result) {
            data = JDW.failure('用户名不存在');
        }
        else if(result.password !== json.password) {
            data = JDW.failure('用户名或密码错误');
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
