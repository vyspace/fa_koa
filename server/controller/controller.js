'use strict';
const router = require('koa-router')(),
	index = require('../action/index');

function controller() {
	return async (ctx, next) => {
	 	router.use('/', index.routes(), index.allowedMethods());
		return next();
	}
}

module.exports = controller;