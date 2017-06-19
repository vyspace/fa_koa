'use strict';
const SUtil = require('./SUtil'),
    methods = Symbol('methods'),
    mappers = Symbol('mappers');
class PoolConnection {
    constructor(_mappers) {
        this[mappers] = _mappers;
        this[methods] = ['selectOne', 'insert', 'update', 'delete', 'commits', 'rollbacks'];
    }
    * [Symbol.iterator]() {
        for (let item of this[methods]) {
            yield item;
        }
    }
    selectOne() {

    }
    insert(tag, param) {
        if(!tag || !param) {
            return;
        }
        let sql = SUtil.mapperHandler(this.mappers, tag, param);
        return new Promise((resolve, reject) => {
            this.beginTransaction((err) => {
                if(err) {
                    reject(err);
                }
                else {
                    this.query(sql, (err, rows) => {
                        if(err) {
                            reject(err);
                        }
                        else{
                            resolve(rows);
                        }
                    });
                }
            });
        });
    }
    update() {

    }
    delete() {

    }
    commits() {
        return new Promise((resolve, reject) => {
            this.commit((err)=>{
                if(err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
    rollbacks() {
        return new Promise((resolve, reject) => {
            this.rollback((err)=>{
                if(err) {
                    reject(err);
                }
                else {
                    resolve();
                }
            });
        });
    }
}

module.exports = PoolConnection;

