'use strict';

import { getMyHomeData } from '../utils/api';

export const MY_HOME_GET = 'MY_HOME_GET';
export const MY_HOME_GET_SUCCESS = 'MY_HOME_GET_SUCCESS';
export const MY_HOME_GET_FAILURE = 'MY_HOME_GET_FAILURE';

function getMyHome() {
    return {
        type: MY_HOME_GET
    };
}

function getMyHomeSuccess(json) {
    return {
        type: MY_HOME_GET_SUCCESS,
        payload: json
    };
}

function getMyHomeFailure(err) {
    return {
        type: MY_HOME_GET_FAILURE,
        payload: err
    };
}

export function getMyHome() {
    return (dispatch) => {
        getMyHomeData((json) => {
            dispatch(getMyHomeSuccess(json));
        }, (err) => {
            dispatch(getMyHomeFailure(err));
        });
    };
}
