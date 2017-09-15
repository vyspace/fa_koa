'use strict';

const UserDao = require('../dao/UserDao'),
    User = require('../model/User'),
    UserInfo = require('../model/UserInfo'),
    _userDao = Symbol('userDao');
class UserService {
    constructor() {
        this[_userDao] = new UserDao();
    }
    async login(username) {
        try {
            return await this[_userDao].loginByName(username);
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
            await this[_userDao].addUser(user);
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
    async regFinish(username, nickname, gender, signature) {
        const userInfo = new UserInfo();
        userInfo.nickname = nickname;
        userInfo.gender = gender;
        userInfo.signature = signature;
        userInfo.username = username;
        let result = false;
        try {
            await this[_userDao].updateUserSimpleInfo(userInfo);
            result = true;
        }
        catch(err) {
            console.error(err);
        }
        return result;
    }
    async myInfo(username) {
        let result = null;
        try {
            result = this[_userDao].loadMyInfo(username);
        }
        catch(err) {
            console.error(err);
        }
        return result;
    }
}

module.exports = UserService;
