'use strict';

const Router = require('koa-router'),
    router = new Router();

router.get('/', async (ctx) => {
    await ctx.render('spa');
});

module.exports = router;

