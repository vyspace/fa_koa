'use strict';

const router = require('koa-router')();

router.get('/', async (ctx) => {
    await ctx.render('mobile');
});

module.exports = router;