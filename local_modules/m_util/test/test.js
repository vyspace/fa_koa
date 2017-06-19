'use strict';
const Fs = require('../model/SResource'),
	expect = require('chai').expect;

let docPath = '/Users/zh/work/nodejs_proj/fa_koa/local_modules/m_util/',
	filePath = docPath + 'package.json';
describe('测试文件操作类', () => {
	describe('Fs', () => {
		it('#isExists', (done) => {
			Fs.isExists(filePath).then((flag) => {
				expect(flag).to.equal(true);
				done();
			});
		});
		it('#readFile', (done) => {
			Fs.readFile(filePath).then((data) => {
				expect(data).to.be.a('string');
				done();
			})
		});
		it('#readDir', (done) => {
			Fs.readDir(docPath).then((data) => {
				expect(data).to.be.an('array');
				done();
			})
		});
	});
}) 