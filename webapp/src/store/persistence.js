'use strict';

const storeTag = 'FA_PERSIST';
const isStore = 'FA_IS_PERSIST';
const pageParams = 'FA_PAGE_PARAMS'

export function saveStore(obj) {
    const str = JSON.stringify(obj);
    localStorage.setItem(storeTag, str);
    sessionStorage.setItem(storeTag, isStore);
}

function getStore() {
    return JSON.parse(localStorage.getItem(storeTag));
}

function isRefreshPage() {
    return sessionStorage.getItem(storeTag) === isStore;
}

export function restore(store) {
    if(isRefreshPage()) {
        Object.assign(store, getStore());
    }
}

export function savePageParams(obj) {
    sessionStorage.setItem(pageParams, JSON.stringify(obj));
}

export function getPageParams() {
    return JSON.parse(sessionStorage.getItem(pageParams));
}
