'use strict';

const Router = require('koa-router'),
    md5 = require('md5'),
    UserService = require('m_user').UserService,
    JDW = require('../util/JsonDataWrap'),
    router = new Router();

router.post('/', async (ctx) => {
    let data = null;
    const json = JSON.parse(ctx.request.body);
    if(json) {
        const service = new UserService(),
            user = json.username.trim(),
            result = await service.login(user);
        if(result === '') {
            data = JDW.failure('登陆失败，请稍后再试！');
        }
        if(result === null) {
            data = JDW.failure('用户名不存在');
        }
        if(result) {
            const pwd = json.password.trim();
            if(result.password !== pwd) {
                data = JDW.failure('用户名或密码错误');
            }
            else {
                const timestmp = new Date().getTime(),
                    _token = md5(user + timestmp);
                data = JDW.success({ id: result.id, username: user, nickname: result.nickname, token: _token });
            }
        }
    }
    else {
        data = JDW.failure('登陆失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;
