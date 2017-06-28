'use strict';
const router = require('koa-router')(),
    UserService = require('m_user').UserAdminService,
    pageData = require('../util/pageData');

pageData.title = '登陆';
pageData.data = {
    username: ''
};
router.get('/', async (ctx) => {
    pageData.error.tag = '';
    pageData.error.message = '';
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
                pageData.error.tag = 'password';
                pageData.error.message = '密码错误';
            }
        }
        else {
            pageData.error.tag = 'username';
            pageData.error.message = '用户名不存在';
        }
    }
    else {
        pageData.error.tag = 'username';
        pageData.error.message = '请输入用户名和密码';
    }
    if(!username) {
        username = '';
    }
    pageData.data.username = username;
    await ctx.render('login', pageData);
});

module.exports = router;