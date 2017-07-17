'use strict';

const Util = require('m_util'),
    PoolFactory = require('../model/PoolFactory'),
    factory = new PoolFactory(),
    sqlPath = '../sql/';

const initDB = async () => {
    const pool = await factory.getInstance();
    const results = [];
    const pathList = await (Util.Fs.readDir(sqlPath, 'sql'));
    for(const path of pathList) {
        try {
            results.push(pool.query(Util.Fs.readFile(path)));
        }
        catch(err) {
            throw err;
        }
    }
    await Promise.all(results);
};

initDB();
