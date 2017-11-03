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
    async loadMyInfo(userId) {
        try {
            return await super.load('User.loadMyInfo', userId);
        }
        catch(err) {
            throw err;
        }
    }
    async updateLike(params) {
        try {
            return await super.update('User.updateLike', params);
        }
        catch(err) {
            throw err;
        }
    }
}

module.exports = UserDao;
