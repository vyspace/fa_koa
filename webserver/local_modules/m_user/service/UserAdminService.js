'use strict';

const UserAdminDao = require('../dao/UserAdminDao'),
    _userDao = Symbol('userDao');
class UserService {
    constructor() {
        this[_userDao] = new UserAdminDao();
    }
    async login(username) {
        const user = await this[_userDao].loadByName(username);
        return user;
    }
    async page(pageIndex) {
        const pager = await this[_userDao].page(pageIndex);
        return pager;
    }
}

module.exports = UserService;
