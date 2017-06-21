'use strict';
const _dataList = Symbol('dataList'),
    _pageOffset = Symbol('pageOffset'),
    _pageSize = Symbol('pageSize'),
    _totalRecord = Symbol('totalRecord');

class Pager {
    constructor() {
        this[_dataList] = null;
        this[_pageOffset] = 0;
        this[_pageSize] = 10;
        this[_totalRecord] = 0;
    }
    set dataList(value) {
        if(typeof value === 'object' && value instanceof Array) {
            this[_dataList] = value;
        }
    }
    get dataList() {
        return this[_dataList];
    }
    set pageOffset(value) {
        if(typeof value === 'number') {
            this[_pageOffset] = value;
        }
    }
    get pageOffset() {
        return this[_pageOffset];
    }
    set pageSize(value) {
        if(typeof value === 'number') {
            this[_pageSize] = value;
        }
    }
    get pageSize() {
        return this[_pageSize];
    }
    set totalRecord(value) {
        if(typeof value === 'number') {
            this[_totalRecord] = value;
        }
    }
    get totalRecord() {
        return this[_totalRecord];
    }
}

module.exports = Pager;

