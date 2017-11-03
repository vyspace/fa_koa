'use strict';

const Router = require('koa-router'),
    UserService = require('m_user').UserService,
    BlogService = require('m_blog').BlogService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.post('/', async (ctx) => {
    let data = null;
    const json = JSON.parse(ctx.request.body);
    if(json) {
        const blogService = new BlogService(),
            uid = json.uid && Number(json.uid),
            bid = json.bid && Number(json.bid);
        const res = await blogService.getNumOfLikes(bid);
        if(res && res.numOfLikes) {
            const userService = new UserService(),
                result = await userService.updateLike(uid, bid, (res.numOfLikes + 1));
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

    }
    else {
        data = JDW.failure('更新失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;

