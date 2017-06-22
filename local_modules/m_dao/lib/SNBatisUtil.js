'use strict';
const path = require('path'),
    SqlSessionFactory = require('m_nbatis'),
    _static = Symbol('static');
let factory = null;
class SNBatisUtil {
    constructor() {
        throw new Error('SDaoUtil is a static class.');
    }
    static [_static]() {
        if(!factory) {
            try {
                const configPath = path.join(__dirname, '../nbatis_config.json');
                factory = new SqlSessionFactory().createPool(configPath);
            }
            catch(err) {
                throw err;
            }
        }
    }
    static async createSession() {
        let session = null;
        try {
            session = await factory.openSession();
        }
        catch(err) {
            throw err;
        }
        return session;
    }
    static async rollback(session) {
        if(session) {
            await session.rollbacks();
        }
    }
    static async closeSession(session) {
        if(session){
            await session.release();
        }
    }
}

SNBatisUtil[_static]();

module.exports = SNBatisUtil;