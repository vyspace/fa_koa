'use strict';

const BlogDao = require('../dao/BlogDao'),
    _blogDao = Symbol('blogDao');

class UserService {
    constructor() {
        this[_blogDao] = new BlogDao();
    }
    async pager(pageIndex) {
        const pager = await this[_userDao].pager(pageIndex);
        return pager;
    }
}

module.exports = UserService;

