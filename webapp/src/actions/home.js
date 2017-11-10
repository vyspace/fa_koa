'use strict';

import { getHomeData } from '../utils/api';

export const HOME_GET_START = 'HOME_GET_START';
export const HOME_GET_SUCCESS = 'HOME_GET_SUCCESS';
export const HOME_GET_FAILURE = 'HOME_GET_FAILURE';
export const HOME_SCROLL_TOP = 'HOME_SCROLL_TOP';
export const HOME_PAGE_PARAMS = 'HOME_PAGE_PARAMS';
export const HOME_UPDATE_SUCCESS = 'HOME_UPDATE_SUCCESS';
export const HOME_SAVE_PAGE_INDEX = 'HOME_SAVE_PAGE_INDEX';
export const HOME_SAVE_DATA_TIP = 'HOME_SAVE_DATA_TIP';
export const HOME_SAVE_TIP_TEXT = 'HOME_SAVE_TIP_TEXT';

function getHomeStart() {
    return {
        type: HOME_GET_START
    };
}

function getHomeSuccess(json) {
    return {
        type: HOME_GET_SUCCESS,
        payload: json
    };
}

function getHomeFailure(err) {
    return {
        type: HOME_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

function updateHomeSuccess(json) {
    return {
        type: HOME_UPDATE_SUCCESS,
        payload: json
    };
}

export function saveScrollTop(payload) {
    return {
        type: HOME_SCROLL_TOP,
        payload
    };
}

export function savePageParams(payload) {
    return {
        type: HOME_PAGE_PARAMS,
        payload
    };
}

export function getHomeList(obj) {
    return (dispatch) => {
        dispatch(getHomeStart());
        getHomeData(obj, (json) => {
            dispatch(getHomeSuccess(json));
        }, (err) => {
            dispatch(getHomeFailure(err));
        });
    };
}

export function updateHomeList(obj, success, failure) {
    return (dispatch) => {
        getHomeData(obj, (json) => {
            dispatch(updateHomeSuccess(json));
            success(json);
        }, (err) => {
            failure(err);
        });
    };
}

export function saveHomePageIndex(payload) {
    return {
        type: HOME_SAVE_PAGE_INDEX,
        payload
    };
}

export function saveDataTip(payload) {
    return {
        type: HOME_SAVE_DATA_TIP,
        payload
    };
}

export function saveTipText(payload) {
    return {
        type: HOME_SAVE_TIP_TEXT,
        payload
    };
}