'use strict';

import { getHomeList } from '../utils/api';

export const GET_HOME = 'GET_HOME';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILURE = 'GET_HOME_FAILURE';
export const SAVE_PARAMS = 'SAVE_PARAMS';
export const SAVE_SCROLL_TOP = 'SAVE_SCROLL_TOP';

function getHome() {
    return {
        type: GET_HOME
    };
}

function getHomeSuccess(json) {
    return {
        type: GET_HOME_SUCCESS,
        payload: json
    };
}

function getHomeFailure(err) {
    return {
        type: GET_HOME_FAILURE,
        payload: err
    };
}

function saveci(payload) {
    return {
        type: SAVE_PARAMS,
        payload
    };
}

function savest(payload) {
    return {
        type: SAVE_SCROLL_TOP,
        payload
    };
}

export function saveParams(payload) {
    return (dispatch) => {
        dispatch(saveci(payload));
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