'use strict';
const path = require('path'),
    SqlSessionFactory = require('m_nbatis'),
    Pager = require('m_util').Pager,
    User = require('../model/User'),
    _factory = Symbol('factory');
class Test {
    constructor() {
        const configPath = path.join(__dirname, './nbatis_config.json');
        this[_factory] = new SqlSessionFactory().createPool(configPath);
    }
    async testInsert() {
        let session = null;
        try{
            session = await (this[_factory].openSession());
            const user1 = new User(0, 'test15', '123456');
            await session.insert('User.add', user1);
            await session.commits();
        }
        catch(err){
            if(session){
                await session.rollbacks();
            }
            throw err;
        }
        finally {
            if(session){
                await session.release();
            }
        }
    }
    async testUpdate() {
        let session = null;
        try{
            session = await (this[_factory].openSession());
            const user = new User(7, 'testA', '654321');
            await session.insert('User.update', user);
            await session.commits();
        }
        catch(err){
            if(session){
                await session.rollbacks();
            }
            throw err;
        }
        finally {
            if(session){
                await session.release();
            }
        }
    }
    async testDelete() {
        let session = null;
        try{
            session = await (this[_factory].openSession());
            await session.delete('User.delete', 4);
            await session.commits();
        }
        catch(err){
            if(session){
                await session.rollbacks();
            }
            throw err;
        }
        finally {
            if(session){
                await session.release();
            }
        }
    }
    async testSelectOne() {
        let session = null;
        try{
            session = await (this[_factory].openSession());
            let user = await session.selectOne('User.loadById', 1);
            console.log(user);
        }
        catch(err){
            throw err;
        }
        finally {
            if(session){
                await session.release();
            }
        }
    }
    async testSelectList() {
        let session = null;
        try{
            session = await (this[_factory].openSession());
            let user = await session.selectList('User.loadByName', '%test%');
            console.log(user);
        }
        catch(err){
            throw err;
        }
        finally {
            if(session){
                await session.release();
            }
        }
    }
    async testSelectPager() {
        let session = null;
        const pageSize = 5,
            pageOffset = 0,
            pager = new Pager();
        try{
            const obj = {
                "username": '',
                "pageSize": pageSize,
                "pageOffset": pageOffset,
                "sort": 'id',
                "order": 'desc'
            }
            session = await (this[_factory].openSession());
            let list = await session.selectList('User.page', obj);
            let totalRecord = await session.selectOne('User.listCount');
            pager.dataList = list;
            pager.pageOffset = pageOffset;
            pager.pageSize = pageSize;
            pager.totalRecord = totalRecord;
            console.log(list);
        }
        catch(err){
            throw err;
        }
        finally {
            if(session){
                await session.release();
            }
        }
    }
    testGetPath() {
        let xx = User.getDirPath();
    }

}

const test = new Test();
test.testSelectPager();