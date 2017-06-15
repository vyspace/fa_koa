'use strict';

const UserDao = require('../dao/UserDao'),
	User = require('../model/User');
let userDao = Symbol('userDao');
class UserService {
	constructor() {
		this[userDao] = new UserDao();
	}
	login(username='') {
		try {
			const user = this[userDao].load(username);
		}
		catch(err) {
			console.log(err);
		}

	}
}