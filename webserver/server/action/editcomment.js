'use strict';

const Router = require('koa-router'),
    BlogService = require('m_blog').BlogService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.post('/', async (ctx) => {
    let data = null;
    const json = JSON.parse(ctx.request.body);
    if(json) {
        const blogService = new BlogService(),
            result = await blogService.postComment(json);
        if(!result) {
            data = JDW.failure('更新失败，请稍后再试！');
        }
        else {
            data = JDW.success();
        }
    }
    else {
        data = JDW.failure('更新失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;

