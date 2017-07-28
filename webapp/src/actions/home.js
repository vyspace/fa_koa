'use strict';

import { getHomeList } from '../utils/api';

export const HOME_GET = 'HOME_GET';
export const HOME_GET_SUCCESS = 'HOME_GET_SUCCESS';
export const HOME_GET_FAILURE = 'HOME_GET_FAILURE';
export const HOME_PARAMS = 'HOME_PARAMS';
export const HOME_SCROLL_TOP = 'HOME_SCROLL_TOP';

function getHome() {
    return {
        type: HOME_GET
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
        payload: err
    };
}

function savepa(payload) {
    return {
        type: HOME_PARAMS,
        payload
    };
}

function savest(payload) {
    return {
        type: HOME_SCROLL_TOP,
        payload
    };
}

export function saveParams(payload) {
    return (dispatch) => {
        dispatch(savepa(payload));
    };
}

export function getHomeData() {
    return (dispatch) => {
        getHomeList((json) => {
            dispatch(getHomeSuccess(json));
        }, (err) => {
            dispatch(getHomeFailure(err));
        });
    };
}


export function saveScrollTop(payload) {
    return (dispatch) => {
        dispatch(savest(payload));
    };
}
