'use strict';

const router = require('koa-router')(),
    pageData = require('../util/pageData'),
    UserAdminService = require('m_user').UserAdminService;

pageData.title = '主页';
pageData.data = {
    username: ''
};

router.get('/', async (ctx) => {
    const userAdminService = new UserAdminService();
    pageData.data = await userAdminService.page();
    console.log(...pageData.data.dataList);
    await ctx.render('home', pageData);
}).post('/', async () => {

});

module.exports = router;
