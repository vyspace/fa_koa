'use strict';

const SNBatisUtil = require('./SNBatisUtil'),
    Pager = require('./Pager');

class BaseDao {
    async add(tag, obj) {
        let session = null;
        try {
            session = await SNBatisUtil.createSession();
            await session.insert(tag, obj);
        }
        catch (err) {
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
        }
        catch (err) {
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
        }
        catch (err) {
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
        catch (err) {
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
        catch (err) {
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
        return list;
    }
    async pager(tag, obj) {
        let session = null,
            list = null;
        const params = {
                sort: undefined,
                order: undefined
            },
            target = {};
        Object.assign(target, params, obj);
        const pager = new Pager();
        try {
            pager.pageSize = target.pageSize;
            session = await SNBatisUtil.createSession();
            list = await session.selectList(tag, target);
            pager.dataList = list;
        }
        catch (err) {
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
        return pager;
    }
    static async test() {
        let session = null;
        try {
            session = await SNBatisUtil.createSession();
        }
        catch(err) {
            console.log('数据库链接失败！');
            throw err;
        }
        finally {
            await SNBatisUtil.closeSession(session);
        }
    }
}

module.exports = BaseDao;
