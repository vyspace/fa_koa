'use strict';
const supertest = require('supertest'),
	chai = require('chai'),
	testDBLink = require('./db.test.js');

describe('开始测试mysql数据库连接', ()=>{
	it('#testDBLink()', (done)=>{
		testDBLink();
		done();
	})
});
