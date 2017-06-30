'use strict';

const BaseDao = require('m_dao');
class UserDao extends BaseDao {
    async loadByName(username) {
        const user = await super.load('UserAdmin.loadByName', username);
        return user;
    }
    async add(user) {
        const loadUser = await super.load('UserAdmin.loadByName', user.username);
        if(loadUser != null) {
            throw new Error(`${user.username} is exist`);
        }
        await super.add('UserAdmin.add', user);
    }
    async disable(id) {
        await super.delete('UserAdmin.disable', id);
    }
    async update(user) {
        await super.update('UserAdmin.update', user);
    }
    async page(pageIndex) {
        const params = {
            pageIndex,
            pageOffset: 0,
            pageSize: 10
        };
        const page = await super.page('UserAdmin.page', 'UserAdmin.listCount', params);
        return page;
    }
}

module.exports = UserDao;

