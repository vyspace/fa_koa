'use strict';
const query = require('../util/db');

async function testDBLink() {
	let sql = 'show tables;';
	try {
		list = await query(sql);
	}
	catch(err) {
		throw err;
	}
}

module.exports = testDBLink;