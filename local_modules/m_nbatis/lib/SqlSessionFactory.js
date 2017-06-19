'use strict';
const mysql = require('mysql'),
    path = require('path'),
    PoolConnection = require('./PoolConnection'),
    pool = Symbol('pool'),
    shallowCopy = Symbol('shallowCopy'),
    mappers = Symbol('mappers');
class SqlSessionFactory {
    constructor() {
        this[pool] = null;
    }
    createPool(_path) {
        const config = require(_path),
            configDocPath = path.dirname(_path);
        if(!this[pool]) {
            this[mappers] = config.mappers;
            this[mappers].aPath = configDocPath;
            const dataSource = config.dataSource;
            this[pool] = mysql.createPool({
                host: dataSource.host,
                user: dataSource.user,
                password: dataSource.password,
                database: dataSource.database,
                connectionLimit: dataSource.connectionLimit
            });
        }
        return this;
    }
    testConnection() {
        return new Promise((resolve, reject) => {
            this[pool].getConnection((err, connection) => {
                if(err){
                    throw err;
                    resolve(false);
                }
                else{
                    resolve(true);
                }
            });
        });
    }
    openSession() {
        return new Promise((resolve, reject) => {
            this[pool].getConnection((err, connection) => {
                if(err){
                    reject(err);
                }
                else{
                    let session = new PoolConnection();
                    connection.mappers = this[mappers];
                    this[shallowCopy](connection, session);
                    resolve(connection);
                }
            });
        });
    }
    [shallowCopy](obj, src) {
        for (let item of src) {
            obj.constructor.prototype[item] = src.constructor.prototype[item];
        }
    }
}

module.exports = SqlSessionFactory;