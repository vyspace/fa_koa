'use strict';
const pool = Symbol('pool');
class SqlSessionFactory {
    constructor() {
        this[pool] = null;
    }
    build(config) {
        if(!this[pool]) {
            this[pool] = mysql.createPool({
                host: config.dataSource.host,
                user: config.dataSource.root,
                password: config.dataSource.password,
                database: config.dataSource.database
            });
        }
    }
    openSession() {

    }
    select() {

    }
    insert() {

    }
    update() {

    }
    commit() {

    }
    close() {

    }
}

module.exports = SqlSessionFactory;