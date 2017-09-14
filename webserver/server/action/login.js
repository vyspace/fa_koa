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
        if(result === '') {
            data = JDW.failure('登陆失败，请稍后再试！');
        }
        if(result === null) {
            data = JDW.failure('用户名不存在');
        }
        if(result) {
            if(result.password !== json.password) {
                data = JDW.failure('用户名或密码错误');
            }
            else {
                data = JDW.success({ username: json.username });
            }
        }
    }
    else {
        data = JDW.failure('登陆失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;
