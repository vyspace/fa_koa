'use strict';

const BaseDao = require('m_dao');
class UserDao extends BaseDao {
    async loadByName(username) {
        const user = await super.load('User.loadByName', username);
        return user;
    }
    async add(user) {
        const loadUser = await super.load('User.loadByName', user.username);
        if(loadUser != null) {
            throw new Error(`${user.username} is exist`);
        }
        await super.add('User.add', user);
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
