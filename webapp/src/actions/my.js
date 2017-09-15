'use strict';

import { getMyInfoData } from '../utils/api';

export const MY_GET = 'MY_GET';
export const MY_GET_SUCCESS = 'MY_GET_SUCCESS';
export const MY_GET_FAILURE = 'MY_GET_FAILURE';

function getMy() {
    return {
        type: MY_GET
    };
}

function getMySuccess(json) {
    return {
        type: MY_GET_SUCCESS,
        payload: json
    };
}

function getMyFailure(err) {
    return {
        type: MY_GET_FAILURE,
        payload: err
    };
}

export function getMyInfo(username) {
    return (dispatch) => {
        getMyInfoData(username, (json) => {
            dispatch(getMySuccess(json));
        }, (err) => {
            dispatch(getMyFailure(err));
        });
    };
}

