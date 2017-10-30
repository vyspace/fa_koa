'use strict';

const BlogDao = require('../dao/BlogDao'),
    _blogDao = Symbol('blogDao');

class BlogService {
    constructor() {
        this[_blogDao] = new BlogDao();
    }
    async homePager(uid, pageIndex, rows) {
        const pager = await this[_blogDao].pager(uid, undefined, pageIndex, rows);
        return pager;
    }
    async myHomePager(uid, oid, pageIndex) {
        const pager = await this[_userDao].pager(uid, pageIndex);
        return pager;
    }
}

module.exports = BlogService;

