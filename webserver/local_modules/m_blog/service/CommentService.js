'use strict';

const CommentDao = require('../dao/CommentDao'),
    _commentDao = Symbol('commentDao');

class BlogService {
    constructor() {
        this[_commentDao] = new CommentDao();
    }
    async commentPager(bid, pageIndex) {
        let pager = null;
        try {
            pager = await this[_commentDao].pager(bid, pageIndex);
        }
        catch (err) {
            console.error(err);
        }
        return pager;
    }
}

module.exports = BlogService;

