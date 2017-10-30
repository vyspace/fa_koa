'use strict';

const FA_PERSIST = 'FA_PERSIST';
const FA_USER = 'FA_USER';

/**
  * sessionStorage 刷新时存在，关闭页面时消失
  */

export function saveSession(obj) {
    const str = JSON.stringify(obj);
    sessionStorage.setItem(FA_PERSIST, str);
}

function getSession() {
    const str = sessionStorage.getItem(FA_PERSIST);
    if(str) {
        return JSON.parse(str);
    }
    else {
        return {};
    }
}

export function restore(store) {
    const session = getSession();
    if(session) {
        Object.assign(store, session);
    }
}

export function getUser() {
    return JSON.parse(localStorage.getItem(FA_USER));
}

export function testLogin() {
    const user = getUser();
    if(user) {
        window.FaKoa.uid = user.id;
        return true;
    }
    else {
        window.FaKoa.uid = -1;
        return false;
    }
}

export function saveUser(user) {
    const str = JSON.stringify(user);
    localStorage.setItem(FA_USER, str);
    if(testLogin()) {
        window.FaKoa.isAuthenticated = true;
    }
}

export function removeUser() {
    localStorage.removeItem(FA_USER);
    window.FaKoa.isAuthenticated = testLogin();
}
