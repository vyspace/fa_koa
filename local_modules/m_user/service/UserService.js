'use strict';

const UserDao = require('../dao/UserDao'),
    _userDao = Symbol('userDao');
class UserService {
    constructor() {
        this[_userDao] = new UserDao();
    }
    async login(username) {
        const user = await this[_userDao].loadByName(username);
        return user;
    }
    register() {

    }
}

module.exports = UserService;
