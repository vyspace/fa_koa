'use strict';
const router = require('koa-router')(),
    UserService = require('m_user').UserService,
    pageData = require('../util/pageData');

pageData.title = '登陆';
pageData.data = {
    username: ''
};
router.get('/', async (ctx) => {
    await ctx.render('login', pageData);
}).post('/', async (ctx) => {
    let username = ctx.request.body.username,
        password = ctx.request.body.password;
    if(username && password) {
        let userService = new UserService(),
            user = await userService.login(username);
        if(user) {
            if(user.password === password) {
                await ctx.redirect('/admin/home');
                return;
            }
            else {
                pageData.errMessage = '密码错误';
            }
        }
        else {
            pageData.errMessage = '用户名不存在';
        }
    }
    else {
        pageData.errMessage = '请输入用户名和密码';
    }
    if(!username) {
        username = '';
    }
    pageData.data.username = username;
    await ctx.render('index', pageData);
});

module.exports = router;