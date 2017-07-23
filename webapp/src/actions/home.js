'use strict';

import { getHomeList } from '../utils/api';

export const GET_HOME = 'GET_HOME';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILURE = 'GET_HOME_FAILURE';

function getHome(payload) {
    return {
        type: GET_HOME,
        payload
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

