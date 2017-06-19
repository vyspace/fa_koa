'use strict';
const SqlSessionFactory = require('m_nbatis'),
    resource = require('../nbatis_config.json'),
    staticInit = Symbol('staticInit'),
    factory = Symbol('factory');
class SNBatisUtil {
    constructor() {
        throw new Error('SNBatisUtil is a static class.');
    }
    static async [staticInit]() {
        if(!this[factory]) {
            try {
                this[factory] = new SqlSessionFactory().build(resource);
            }
            catch (err) {
                throw  err;
            }
        }
    }
    static createSession() {
        return this[factory].openSession();
    }
    static releaseSession(session) {
        if(!session) {
            session.release();
        }
    }
    static closeSession(session) {
        if(!session) {
            session.destroy();
        }
    }
}

SNBatisUtil[staticInit]();

module.exports = SNBatisUtil;