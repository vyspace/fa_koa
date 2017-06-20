'user strict';
const _id = Symbol('id'),
    _name = Symbol('name'),
    _gender = Symbol('gender'),
    _phone = Symbol('phone'),
    _birthday = Symbol('birthday');
class User {
    constructor(id=0, name='', gender='1', phone='', birthday=631152000000) {
        this[_id] = id;
        this[_name] = name;
        this[_gender] = gender;
        this[_phone] = phone;
        this[_birthday] = birthday;
    }
    set id(value) {
        this[_id] = value;
    }
    get id() {
        return this[_id];
    }
    set name(value) {
        this[_name] = value;
    }
    get name() {
        return this[_name];
    }
    set gender(value) {
        this[_gender] = value;
    }
    get gender() {
        return this[_gender];
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
}

module.exports = User;
