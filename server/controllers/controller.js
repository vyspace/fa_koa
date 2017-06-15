'use strict';
const router = require('koa-router')(),
	index = require('./index')

router.use('/', index.routers(), index.allowedMethods());