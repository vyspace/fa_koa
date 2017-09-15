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
            nick = json.nickname.trim(),
            gender = json.gender.trim(),
            result = await service.regFinish(user, nick, gender, json.signature);
        if(!result) {
            data = JDW.failure('提交失败，请稍后再试！');
        }
        else {
            const timestmp = new Date().getTime(),
                _token = md5(user + timestmp);
            data = JDW.success({ username: user, nickname: nick, token: _token });
        }
    }
    else {
        data = JDW.failure('提交失败，请稍后再试！');
    }
    ctx.response.body = data;
});

module.exports = router;

