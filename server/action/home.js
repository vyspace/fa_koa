'use strict';
const router = require('koa-router')(),
	UserAdminService = require('m_user').UserAdminService,
    pageData = require('../util/pageData');
    pageData.title = '主页';
    pageData.data = {
        username: ''
    };
router.get('/', async (ctx) => {
    const userAdminService = new UserAdminService();
    pageData.data = await userAdminService.page();
    console.log(...pageData.data.dataList);
	await ctx.render('home', pageData);
}).post('/', async (ctx) => {

});

module.exports = router;
