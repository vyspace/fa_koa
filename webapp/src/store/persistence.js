'use strict';

const FA_PERSIST = 'FA_PERSIST';
const FA_IS_PERSIST = 'FA_IS_PERSIST';
const FA_USER = 'FA_USER';
const FA_PAGE_PARAM = 'FA_PAGE_PARAM';

export function saveSession(obj) {
    const str = JSON.stringify(obj);
    sessionStorage.setItem(FA_PERSIST, str);
    sessionStorage.setItem(FA_IS_PERSIST, 'true');
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

function isRefreshPage() {
    return sessionStorage.getItem(FA_IS_PERSIST) === 'true';
}

export function restore(store) {
    if(isRefreshPage()) {
        Object.assign(store, getSession());
    }
}

export function getUser() {
    return JSON.parse(localStorage.getItem(FA_USER));
}

export function testLogin() {
    const user = getUser();
    if(user) {
        window.FaKoa.username = user.username;
        return true;
    }
    else {
        window.FaKoa.username = '';
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

export function delUser() {
    localStorage.removeItem(FA_USER);
    window.FaKoa.isAuthenticated = testLogin();
}

export function savePageParam(targetAction, json) {
    const obj = {};
    obj[targetAction] = json;
    const str = JSON.stringify(obj);
    sessionStorage.setItem(FA_PAGE_PARAM, str);
}

export function getPageParam(action) {
    const str = sessionStorage.getItem(FA_PAGE_PARAM);
    if(str) {
        const json = JSON.parse(str);
        return json[action];
    }
    else {
        return null;
    }
}