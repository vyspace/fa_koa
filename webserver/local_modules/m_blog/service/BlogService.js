'use strict';

const BlogDao = require('../dao/BlogDao'),
    _blogDao = Symbol('blogDao');

class BlogService {
    constructor() {
        this[_blogDao] = new BlogDao();
    }
    async homePager(uid, pageIndex, rows) {
        let pager = null;
        try {
            pager = await this[_blogDao].pager(uid, undefined, pageIndex, rows);
        }
        catch (err) {
            console.error(err);
        }
        return pager;
    }
    async getNumOfLikes(blogId) {
        let num = null;
        try {
            num = await this[_blogDao].loadNumOfLikes(blogId);
        }
        catch (err) {
            console.error(err);
        }
        return num;
    }
    async postComment(params) {
        let flag = true;
        try {
            await this[_blogDao].addComment(params);
        }
        catch (err) {
            flag = false;
            console.error(err);
        }
        return flag;
    }
    async myHomePager(uid, oid, pageIndex) {
        const pager = await this[_userDao].pager(uid, pageIndex);
        return pager;
    }
}

module.exports = BlogService;

