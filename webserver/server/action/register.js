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
        switch(result) {
            case 1:
                data = JDW.failure('用户名已存在！');
                break;
            case 2:
                data = JDW.success({ username: json.username });
                break;
            default:
                data = JDW.failure('注册失败，请稍后再试！');
                break;
        }
    }
    else {
        data = JDW.failure('注册失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;

