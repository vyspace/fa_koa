'use strict';

const _id = Symbol('id'),
    _blogType = Symbol('blogType'),
    _createTime = Symbol('createTime'),
    _userId = Symbol('userId'),
    _nickname = Symbol('nickname'),
    _photos = Symbol('photos'),
    _numOfLikes = Symbol('numOfLikes'),
    _isLike = Symbol('isLike'),
    _numOfComments = Symbol('numOfComments'),
    _numOfForwards = Symbol('numOfForwards'),
    _text = Symbol('text');

class Blog {
    set id(value) {
        this[_id] = value;
    }
    get id() {
        return this[_id];
    }
    set blogType(value) {
        this[_blogType] = value;
    }
    get blogType() {
        return this[_blogType];
    }
    set createTime(value) {
        this[_createTime] = value;
    }
    get createTime() {
        return this[_createTime];
    }
    set userId(value) {
        this[_userId] = value;
    }
    get userId() {
        return this[_userId];
    }
    set nickname(value) {
        this[_nickname] = value;
    }
    get nickname() {
        return this[_nickname];
    }
    set photos(value) {
        this[_photos] = value;
    }
    get photos() {
        return this[_photos];
    }
    set numOfLikes(value) {
        this[_numOfLikes] = value;
    }
    get numOfLikes() {
        return this[_numOfLikes];
    }
    set isLike(value) {
        this[_isLike] = value;
    }
    get isLike() {
        return this[_isLike];
    }
    set numOfComments(value) {
        this[_numOfComments] = value;
    }
    get numOfComments() {
        return this[_numOfComments];
    }
    set numOfForwards(value) {
        this[_numOfForwards] = value;
    }
    get numOfForwards() {
        return this[_numOfForwards];
    }
    set text(value) {
        this[_text] = value;
    }
    get text() {
        return this[_text];
    }
}

module.exports = Blog;
