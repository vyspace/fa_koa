'use strict';

import { getHomeList } from '../utils/api';

export const GET_HOME = 'GET_HOME';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILURE = 'GET_HOME_FAILURE';
export const SAVE_COMMENT_INDEX = 'SAVE_COMMENT_INDEX';

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
        type: SAVE_COMMENT_INDEX,
        payload
    };
}

export function saveCommentIndex(payload) {
    return (dispatch) => {
        dispatch(saveci(payload));
    };
}

export function getHomeData() {
    return (dispatch) => {
        dispatch(getHome());
        getHomeList((json) => {
            dispatch(getHomeSuccess(json));
        }, (err) => {
            dispatch(getHomeFailure(err));
        });
    };
}
