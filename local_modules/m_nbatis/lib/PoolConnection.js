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
    selectOne(tag, param) {
        if(!tag || !param) {
            return;
        }
        let obj = SUtil.mapperHandler(this.mappers, tag, param);
        return new Promise((resolve, reject) => {
            this.query(obj.sql, obj.paramArray, (err, rows) => {
                if(err) {
                    reject(err);
                }
                else{
                    if(this.mappers.resultType === 'cobject') {
                        const c = require(this.mappers.classAPath);
                            obj = new c();
                        for(let item in rows[0]) {
                            obj[item] = rows[0][item];
                        }
                    }
                    resolve(obj);
                }
            });
        });
    }
    insert(tag, param) {
        if(!tag || !param) {
            return;
        }
        let obj = SUtil.mapperHandler(this.mappers, tag, param);
        return new Promise((resolve, reject) => {
            this.beginTransaction((err) => {
                if(err) {
                    reject(err);
                }
                else {
                    this.query(obj.sql, obj.paramArray, (err, rows) => {
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

