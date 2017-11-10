'use strict';

const BaseDao = require('m_dao');

class CommentDao extends BaseDao {
    /**
     * @param bid blog id
     * @param pageIndex 页号
     * @returns {Promise.<*>}
     */
    async pager(bid, pageIndex = 1) {
        let totalRecord = 0,  // 总的记录数
            totalPage = 0,  // 总页面数
            pageOffset = 0;  // 行偏移
        const pageSize = 3,  // 每页记录数
            countObj = await super.load('Blog.commentCount');
        totalRecord = countObj.count;

        if(totalRecord > 0) {
            totalPage = Math.ceil(totalRecord / pageSize);
            pageOffset = (pageIndex - 1) * pageSize;
            if(pageIndex > totalPage) {
                return this.defaultPager(totalRecord, totalPage, pageIndex);
            }
        }
        else {
            return this.defaultPager(totalRecord, totalPage, pageIndex);
        }
        const params = {
            blogId: bid,
            pageOffset,
            pageSize
        };
        const page = await super.pager('Blog.commentPager', params);
        page.totalPage = totalPage;
        page.totalRecord = totalRecord;
        return page;
    }
    defaultPager(totalRecord, totalPage, pageIndex) {
        return {
            dataList: [],
            totalPage,
            totalRecord,
            pageIndex
        };
    }
}

module.exports = CommentDao;
