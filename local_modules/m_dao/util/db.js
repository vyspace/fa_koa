'use strict';
const mysql = require('mysql'),
	pool = mysql.createPool({
		host: 'localhost',
		user: 'hello',
		password: '12345',
		database: '_fakoa'
	});

let query = function(sql, value) {
	return new Promise(function(resolve, reject) {
		pool.getConnection(function(err, connection) {
			if(err) {
				reject(err);
			}
			else {
				connection.query(sql, value, (err, rows)=>{
					if(err) {
						reject(err);
					}
					else {
						resolve(rows);
					}
					connection.release();
				});
			}
		});
	});
}

module.exports = query;