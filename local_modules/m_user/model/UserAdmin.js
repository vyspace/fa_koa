'user strict';

const _id = Symbol('id'),
    _username = Symbol('username'),
    _password = Symbol('password'),
    _createTime = Symbol('createTime');
class User {
    constructor(id = 0, username = '', password = '') {
        this[_id] = id;
        this[_username] = username;
        this[_password] = password;
        this[_createTime] = '';
    }
    get id() {
        return this[_id];
    }
    set username(value) {
        this[_username] = value;
    }
    get username() {
        return this[_username];
    }
    set password(value) {
        this[_password] = value;
    }
    get password() {
        return this[_password];
    }
    get createTime() {
        return this[_createTime];
    }
}

module.exports = User;

