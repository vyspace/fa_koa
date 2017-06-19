'user strict';
const id = Symbol('id'),
    username = Symbol('username'),
    password = Symbol('password');
class User {
    constructor(_id=0, _username='', _password='') {
        this[id] = _id;
        this[username] = _username;
        this[password] = _password;
    }
    set Id(value) {
        this[id] = value;
    }
    get Id() {
        return this[id];
    }
    set Username(value) {
        this[username] = value;
    }
    get Username() {
        return this[username];
    }
    set Password(value) {
        this[password] = value;
    }
    get Password() {
        return this[password];
    }
}

module.exports = User;
