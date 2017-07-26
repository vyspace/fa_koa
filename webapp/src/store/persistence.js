'use strict';

const storeTag = 'FA_PERSIST';
const isStore = 'IS_PERSIST';

export function saveStore(obj) {
    const str = JSON.stringify(obj)
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

