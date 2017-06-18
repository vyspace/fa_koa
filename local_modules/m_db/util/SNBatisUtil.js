'use strict';
const nbatis = require('m_nbatis'),
    SqlSessionFactory = nbatis.SqlSessionFactory,
    SResource = nbatis.SResource,
    staticInit = Symbol('staticInit'),
    factory = Symbol('factory');
class SNBatisUtil {
    constructor() {
        throw new Error('SNBatisUtil is a static class.');
    }
    static async [staticInit]() {
        if(!this[factory]) {
            try {
                const resource = await (SResource.getConfig('./nbatis_config.json'));
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
    static closeSession(session) {
        if(session != null) {
            session.close();
        }
    }
}

SNBatisUtil[staticInit]();

module.exports = SNBatisUtil;