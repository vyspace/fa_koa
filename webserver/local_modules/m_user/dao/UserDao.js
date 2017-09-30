'use strict';

const BaseDao = require('m_dao');
class UserDao extends BaseDao {
    async loginByName(username) {
        try {
            return await super.load('User.loginByName', username);
        }
        catch(err) {
            throw err;
        }
    }
    async addUser(user) {
        try {
            const loadUser = await super.load('User.userExist', user.username);
            if(loadUser !== null) {
                throw new Error('1');
            }
            await super.add('User.addUser', user);
        }
        catch (err) {
            throw err;
        }
    }
    async updateUserSimpleInfo(userInfo) {
        try {
            await super.add('User.updateUserSimpleInfo', userInfo);
        }
        catch (err) {
            throw err;
        }
    }
    async loadMyInfo(username) {
        try {
            return await super.load('User.loadMyInfo', username);
        }
        catch(err) {
            throw err;
        }
    }

    async delete(id) {
        await super.delete('User.delete', id);
    }

    async update(user) {
        await super.update('User.update', user);
    }

    async page() {
        const params = {
            pageOffset: 0,
            pageSize: 10
        };
        const page = await super.load('User.page', params);
        return page;
    }
}

module.exports = UserDao;
