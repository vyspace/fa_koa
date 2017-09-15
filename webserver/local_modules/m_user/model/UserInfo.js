'user strict';

const _id = Symbol('id'),
    _username = Symbol('username'),
    _nickname = Symbol('nickname'),
    _profile = Symbol('profile'),
    _gender = Symbol('gender'),
    _site = Symbol('site'),
    _phone = Symbol('phone'),
    _birthday = Symbol('birthday'),
    _signature = Symbol('signature'),
    _tag = Symbol('tag'),
    _level = Symbol('level'),
    _createTime = Symbol('createTime');
class UserInfo {
    constructor(id = 0, username = '', nickname = '', profile = '', gender = '0', site = '',
                phone = '', birthday = '', signature='', tag = '1', level = 1, createTime = '') {
        this[_id] = id;
        this[_username] = username;
        this[_nickname] = nickname;
        this[_profile] = profile;
        this[_gender] = gender;
        this[_site] = site;
        this[_phone] = phone;
        this[_birthday] = birthday;
        this[_signature] = signature;
        this[_tag] = tag;
        this[_level] = level;
        this[_createTime] = createTime;
    }
    set id(value) {
        this[_id] = value;
    }
    get id() {
        return this[_id];
    }
    set username(value) {
        this[_username] = value;
    }
    get username() {
        return this[_username];
    }
    set nickname(value) {
        this[_nickname] = value;
    }
    get nickname() {
        return this[_nickname];
    }
    set profile(value) {
        this[_profile] = value;
    }
    get profile() {
        return this[_profile];
    }
    set gender(value) {
        this[_gender] = value;
    }
    get gender() {
        return this[_gender];
    }
    set site(value) {
        this[_site] = value;
    }
    get site() {
        return this[_site];
    }
    set phone(value) {
        this[_phone] = value;
    }
    get phone() {
        return this[_phone];
    }
    set birthday(value) {
        this[_birthday] = value;
    }
    get birthday() {
        return this[_birthday];
    }
    set signature(value) {
        this[_signature] = value;
    }
    get signature() {
        return this[_signature];
    }
    set tag(value) {
        this[_tag] = value;
    }
    get tag() {
        return this[_tag];
    }
    set level(value) {
        this[_level] = value;
    }
    get level() {
        return this[_level];
    }
    set createTime(value) {
        this[_createTime] = value;
    }
    get createTime() {
        return this[_createTime];
    }
}

module.exports = UserInfo;
