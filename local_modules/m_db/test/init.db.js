'use strict';

const Util = require('m_util'),
    PoolFactory = require('../model/PoolFactory'),
	factory = new PoolFactory(),
	sqlPath = '../sql/';

const initDB =  async () => {
    const pool = await factory.getInstance();
	let sqlCmd = '',
		pathList = await (Util.Fs.readDir(sqlPath, 'sql'));
	for(let path of pathList) {
		try {
            sqlCmd = await (Util.Fs.readFile(path));
			await pool.query(sqlCmd);
		}
		catch(err) {
			throw err;
		}
	}
}

initDB();