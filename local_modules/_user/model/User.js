'use strict';
let id = Symbol('id'),
	username = Symbol('username'),
	password = Symbol('password');
class User {
	constructor(_id=1, _username='', _password='') {
		this[id] = _id;
		this[username] = _username;
		this[_password] = _password;
	}
	get Id() {
		return this[id];
	}
	set Id(value) {
		this[id] = _value;
	}
	get Username() {
		return this[name];
	}
	set Username(value) {
		this[username] = value;
	}
	get Password() {
		return this[password];
	}
	set Password(value) {
		this[password] = value;
	}
}
module.exports = User;