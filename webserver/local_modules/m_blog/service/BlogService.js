'use strict';

const BlogDao = require('../dao/BlogDao'),
    _blogDao = Symbol('blogDao');

class BlogService {
    constructor() {
        this[_blogDao] = new BlogDao();
    }
    async homePager(pageIndex, rows) {
        const pager = await this[_blogDao].pager(undefined, pageIndex, rows);
        return pager;
    }
    async myHomePager(uid, pageIndex) {
        const pager = await this[_userDao].pager(uid, pageIndex);
        return pager;
    }
}

module.exports = BlogService;

