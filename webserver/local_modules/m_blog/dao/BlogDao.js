'use strict';

const BaseDao = require('m_dao');

class BlogDao extends BaseDao {
    /**
     * @param uid 用户id
     * @param pageIndex 页号
     * @param rows 从0开始，需要截取的行总数，防止拉取第二页时有新记录插入，导致序列错误
     * @returns {Promise.<*>}
     */
    async pager(uid, pageIndex, rows) {
        let totalRecord = 0,  // 总的记录数
            totalPage = 0,  // 总页面数
            descPageIndex = 0,  // 反向页号，从时间新到旧展示
            valueOffset = 0,  // pageOffset偏移修正值
            pageOffset = 0;  // 行偏移
        const pageSize = 3;  // 每页记录数
        if(!rows) {
            const countObj = await super.load('Blog.count');
            totalRecord = countObj.count;
        }
        else {
            totalRecord = rows;
        }
        if(totalRecord > 0) {
            valueOffset = totalRecord % pageSize;
            totalPage = Math.ceil(totalRecord / pageSize);
            descPageIndex = (totalPage + 1) - pageIndex;
            pageOffset = (descPageIndex - 1) * pageSize;
            if(pageOffset >= pageSize) {
                pageOffset = (pageOffset - pageSize) + valueOffset;
            }
            else {
                pageOffset = 0;
            }
        }
        const params = {
            rows,
            pageOffset,
            pageSize,
            sort: 't_blog.create_time',
            order: 'desc'
        };
        if(uid) {
            params.uid = uid;
        }
        const page = await super.pager('Blog.pager', params);
        page.totalPage = totalPage;
        page.totalRecord = totalRecord;
        return page;
    }
}

module.exports = BlogDao;
