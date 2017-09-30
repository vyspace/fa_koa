'use strict';

const BaseDao = require('m_dao');

class BlogDao extends BaseDao {
    async pager(pageIndex) {
        const params = {
            pageIndex,
            pageOffset: 0,
            pageSize: 10
        };
        const page = await super.pager('Blog.pager', 'Blog.count', params);
        return page;
    }
}

module.exports = BlogDao;
