'use strict';

const Router = require('koa-router'),
    queryString = require('querystring'),
    CommentService = require('m_blog').CommentService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.get('/', async (ctx) => {
    let data = null;

    const query = ctx.request.querystring;
    if(query) {
        const json = queryString.parse(query),
            service = new CommentService(),
            bid = json.bid && Number(json.bid),
            idx = json.idx && Number(json.idx),
            result = await service.commentPager(bid, idx);
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

