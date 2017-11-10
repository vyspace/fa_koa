'use strict';

const _id = Symbol('id'),
    _blogId = Symbol('blogId'),
    _userId = Symbol('userId'),
    _profile = Symbol('profile'),
    _nickname = Symbol('nickname'),
    _comment = Symbol('comment'),
    _replyList = Symbol('replyList'),
    _createTime = Symbol('createTime');

class Comment {
    set id(value) {
        this[_id] = value;
    }
    get id() {
        return this[_id];
    }
    set blogId(value) {
        this[_blogId] = value;
    }
    get blogId() {
        return this[_blogId];
    }
    set userId(value) {
        this[_userId] = value;
    }
    get userId() {
        return this[_userId];
    }
    set profile(value) {
        this[_profile] = value;
    }
    get profile() {
        return this[_profile];
    }
    set nickname(value) {
        this[_nickname] = value;
    }
    get nickname() {
        return this[_nickname];
    }
    set comment(value) {
        this[_comment] = value;
    }
    get comment() {
        return this[_comment];
    }
    set replyList(value) {
        this[_replyList] = value;
    }
    get replyList() {
        return this[_replyList];
    }
    set createTime(value) {
        this[_createTime] = value;
    }
    get createTime() {
        return this[_createTime];
    }
}

module.exports = Comment;

