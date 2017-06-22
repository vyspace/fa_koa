'use strict';
const SNBatisUtil = require('./SNBatisUtil'),
    Pager = require('./Pager');
class BaseDao {
    constructor() {

    }
    async add(tag, obj) {
        let session = null;
        try {
            session = await SNBatisUtil.createSession();
            await session.insert(tag, obj);
            await session.commits();
        }
        catch (err){
            await SNBatisUtil.rollback(session);
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
    }
    async delete(tag, obj) {
        let session = null;
        try {
            session = await SNBatisUtil.createSession();
            await session.delete(tag, obj);
            await session.commits();
        }
        catch (err){
            await SNBatisUtil.rollback(session);
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
    }
    async update(tag, obj) {
        let session = null;
        try {
            session = await SNBatisUtil.createSession();
            await session.update(tag, obj);
            await session.commits();
        }
        catch (err){
            await SNBatisUtil.rollback(session);
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
    }
    async load(tag, obj) {
        let session = null,
            data = null;
        try {
            session = await SNBatisUtil.createSession();
            data = await session.selectOne(tag, obj);
        }
        catch (err){
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
        return data;
    }
    async list(tag, obj) {
        let session = null,
            list = null;
        try {
            session = await SNBatisUtil.createSession();
            list = await session.selectList(tag, obj);
        }
        catch (err){
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
        return list;
    }
    async page(tag, cTag, obj) {
        let session = null,
            list = null,
            params = {
                "pageOffset": 0,
                "pageSize": 5,
                "sort": undefined,
                "order": undefined
            },
            target = {};
        Object.assign(target, params, obj);
        try {
            session = await SNBatisUtil.createSession();
            list = await session.selectList(tag, target);
            const totalRecord = await session.selectOne(cTag),
                pager = new Pager();
            pager.dataList = list;
            pager.pageOffset = target.pageOffset;
            pager.pageSize = target.pageSize;
            pager.totalRecord = totalRecord;
        }
        catch (err){
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
        return pager;
    }
    static async test() {
        let session = null,
            flag = false;
        try {
            session = await SNBatisUtil.createSession();
            if(session){
                flag = true;
            }
        }
        catch(err) {
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
        return flag;
    }
}

module.exports = BaseDao;