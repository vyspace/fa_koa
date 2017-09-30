'use strict';

const Router = require('koa-router'),
    UserService = require('m_user').UserService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.get('/', async (ctx) => {
    let data = null;
    const service = new UserService(),
        result = await service.myInfo(user);
    if(!result) {
        data = JDW.failure('获取失败，请稍后再试！');
    }
    else {
        data = JDW.success(result);
    }
    ctx.response.body = data;
});

module.exports = router;

