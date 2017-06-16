'use strict';
const mysql = require('mysql'),
	Util = require('m_util'),
	configPath = '../config.json';
let pool = Symbol('pool'),
	getConfig = Symbol('getConfig');

class PoolFactory {
	constructor() {
		this[pool] = null;
	}
	getInstance() {
		if(!this[pool]) {
			console.log('wei chuang')
			const config = this[getConfig]();
			this[pool] = mysql.createPool({
				host: config.host,
				user: config.user,
				password: config.password,
				database: config.database
			});
		}
		else {
			console.log('yi chuang jian')
		}
		return this[pool];
	}
	async [getConfig]() {
		let str = await (Util.Fs.readFile(configPath)),
			obj = Util.Common.strToJson(str);
		return obj;
	}
}

module.exports = PoolFactory;