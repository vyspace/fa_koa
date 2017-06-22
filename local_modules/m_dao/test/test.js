'use strict';
const chai = require('chai'),
	SConnection = require('m_nbatis').SConnection,
	dataSource = require('../nbatis_config.json').dataSource;


describe('开始测试mysql数据库连接', ()=>{
	it('#testConnection', (done)=>{
		const connetion = SConnection.build(dataSource);
        let pro = SConnection.testConnection(connetion);
		pro.then(function(flag){
			chai.expect(flag).to.equal(true);
			done();
		});
	})
});