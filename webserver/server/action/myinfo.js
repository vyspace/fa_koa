'use strict';

const Router = require('koa-router'),
    queryString = require('querystring'),
    UserService = require('m_user').UserService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.get('/', async (ctx) => {
    let data = null;
    const query = ctx.request.querystring;
    if(query) {
        const json = queryString.parse(query),
            service = new UserService(),
            result = await service.myInfo(json.uid);
        if(!result) {
            data = JDW.failure('获取失败，请稍后再试！');
        }
        else {
            data = JDW.success(result);
        }
    }
    else {
        data = JDW.failure('获取失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;

