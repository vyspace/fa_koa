'use strict';
const mysql = require('mysql'),
	Util = require('m_util'),
	configPath = '../config.json';
let pool = Symbol('pool'),
	getConfig = Symbol('getConfig'),
	poolQuery = Symbol('poolQuery');

class PoolFactory {
	constructor() {
		this[pool] = null;
	}
	async getInstance() {
		if(!this[pool]) {
			const config = await (this[getConfig]());
			this[pool] = mysql.createPool({
				host: config.host,
				user: config.root,
				password: config.password,
				database: config.database
			});
			this[pool].query = this[poolQuery];
		}
		return this[pool];
	}
	async [poolQuery](sql, value) {
		return new Promise((resolve, reject) => {
			this.getConnection(function(err, connection) {
				if (err) {
					reject( err )
				} 
				else {
					connection.query(sql, function(err, rows) {
						if ( err ) {
							reject(err)
						}
						else {
							resolve(rows)
						}
						connection.release();
					});
				}
			});
		});
	}
	async [getConfig]() {
		let str = await (Util.Fs.readFile(configPath)),
			obj = Util.Common.strToJson(str);
		return obj;
	}

}

module.exports = PoolFactory;