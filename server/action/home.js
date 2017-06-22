'use strict';
const router = require('koa-router')(),
	UserService = require('m_user').UserService,
    pageData = require('../util/pageData');
    pageData.title = '主页';
    pageData.data = {
        username: ''
    };
router.get('/', async (ctx) => {
	await ctx.render('home', pageData);
}).post('/', async (ctx) => {

});

module.exports = router;
