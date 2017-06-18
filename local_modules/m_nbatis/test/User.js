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
        this[id] = value;
    }
    get Username() {
        return this[id];
    }
    set Password(value) {
        this[id] = value;
    }
    get Password() {
        return this[id];
    }
}

setTimeout(function () {
    console.log('1111111')
    module.exports = User;
}, 3000)
