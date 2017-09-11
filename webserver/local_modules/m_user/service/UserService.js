'use strict';

const UserDao = require('../dao/UserDao'),
    User = require('../model/User'),
    _userDao = Symbol('userDao');
class UserService {
    constructor() {
        this[_userDao] = new UserDao();
    }
    async login(username) {
        const user = await this[_userDao].loadByName(username);
        return user;
    }
    async register(username, password) {
        const user = new User();
        user.username = username;
        user.password = password;
        try {
            await this[_userDao].add(user);
            return true;
        }
        catch(err) {
            return err;
        }
    }
}

module.exports = UserService;
