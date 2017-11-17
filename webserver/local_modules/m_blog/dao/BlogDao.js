'use strict';

const BaseDao = require('m_dao');

class BlogDao extends BaseDao {
    /**
     * @param uid 自己的用户id
     * @param oid 要查看某人的用户id
     * @param pageIndex 页号
     * @param rows 从0开始，需要截取的行总数，防止拉取第二页时有新记录插入，导致序列错误
     * @returns {Promise.<*>}
     */
    async pager(uid, oid, pageIndex, rows) {
        let totalRecord = 0,  // 总的记录数
            totalPage = 0,  // 总页面数
            descPageIndex = 0,  // 反向页号，从时间新到旧展示
            valueOffset = 0,  // pageOffset偏移修正值
            pageOffset = 0,  // 行偏移
            pageSize = 3;  // 每页记录数
        if(!rows) {
            const countObj = await super.load('Blog.blogCount');
            totalRecord = countObj.count;
        }
        else {
            totalRecord = rows;
        }
        if(totalRecord > 0) {
            valueOffset = totalRecord % pageSize;
            totalPage = Math.ceil(totalRecord / pageSize);
            descPageIndex = (totalPage + 1) - pageIndex;
            if(descPageIndex <= 0) {
                return this.defaultPager(totalRecord, totalPage, pageIndex);
            }
            pageOffset = (descPageIndex - 1) * pageSize;
            if(pageOffset >= pageSize) {
                pageOffset = (pageOffset - pageSize) + valueOffset;
            }
            else {
                pageOffset = 0;
                const remainder = totalRecord % totalPage;
                if(remainder > 0) {
                    pageSize = remainder;
                }
            }
        }
        else {
            return this.defaultPager(totalRecord, totalPage, pageIndex);
        }
        const params = {
            rows,
            pageOffset,
            pageSize,
            sort: 't_blog.create_time',
            order: 'desc'
        };
        if(oid) {
            params.oid = oid;
        }
        const page = await super.pager('Blog.blogPager', params);
        page.totalPage = totalPage;
        page.totalRecord = totalRecord;
        if(uid) {
            const likeList = await super.list('Blog.likeList', uid);
            if(likeList) {
                for(let i = 0; i < page.dataList.length; i += 1) {
                    const data = page.dataList[i];
                    for(let j = 0; j < likeList.length; j += 1) {
                        if(data.id === likeList[j].blogId) {
                            data.isLike = true;
                            break;
                        }
                    }
                }
            }
        }
        return page;
    }
    async loadNumOfLikes(blogId) {
        try {
            return await super.load('Blog.loadNumOfLikes', blogId);
        }
        catch (err) {
            throw err;
        }
    }
    async addComment(params) {
        try {
            return await super.add('Blog.addComment', params);
        }
        catch (err) {
            throw err;
        }
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

module.exports = BlogDao;
