'use strict';

import { getHomeData } from '../utils/api';

export const HOME_GET_SUCCESS = 'HOME_GET_SUCCESS';
export const HOME_GET_FAILURE = 'HOME_GET_FAILURE';
export const HOME_SCROLL_TOP = 'HOME_SCROLL_TOP';
export const HOME_PAGE_PARAMS = 'HOME_PAGE_PARAMS';

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

export function getHomeList(idx) {
    return (dispatch) => {
        getHomeData(idx, (json) => {
            dispatch(getHomeSuccess(json));
        }, (err) => {
            dispatch(getHomeFailure(err));
        });
    };
}
