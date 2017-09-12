'use strict';

const FA_PERSIST = 'FA_PERSIST';
const FA_IS_PERSIST = 'FA_IS_PERSIST';
const FA_USER = 'FA_USER';

export function saveSession(obj) {
    const str = JSON.stringify(obj);
    sessionStorage.setItem(FA_PERSIST, str);
    sessionStorage.setItem(FA_IS_PERSIST, 'true');
}

function getSession() {
    return JSON.parse(sessionStorage.getItem(FA_PERSIST));
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
        return true;
    }
    else {
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
