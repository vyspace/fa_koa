'use strict';

const BaseDao = require('m_dao');
class UserDao extends BaseDao {
    async loadByName(username) {
        try {
            return await super.load('User.loadByName', username);
        }
        catch(err) {
            throw err;
        }
    }
    async add(user) {
        try {
            const loadUser = await super.load('User.loadByName', user.username);
            if(loadUser !== null) {
                throw new Error('1');
            }
            await super.add('User.add', user);
        }
        catch (err) {
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
