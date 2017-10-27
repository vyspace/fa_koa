'use strict';

function Pager() {
    this.dataList = null;
    this.pageOffset = 0;
    this.pageSize = 10;
    this.totalPage = 0;
    this.totalRecord = 0;
}

module.exports = Pager;

