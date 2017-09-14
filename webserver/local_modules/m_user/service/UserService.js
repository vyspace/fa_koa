'use strict';

const UserDao = require('../dao/UserDao'),
    User = require('../model/User'),
    _userDao = Symbol('userDao');
class UserService {
    constructor() {
        this[_userDao] = new UserDao();
    }
    async login(username) {
        try {
            return await this[_userDao].loadByName(username);
        }
        catch(err) {
            console.error(err);
            return '';
        }
    }
    async register(username, password) {
        const user = new User();
        user.username = username;
        user.password = password;
        try {
            await this[_userDao].add(user);
            return 2;
        }
        catch(err) {
            console.error(err);
            if(err.message === '1') {
                return 1;
            }
            else {
                return 3;
            }
        }
    }
}

module.exports = UserService;
