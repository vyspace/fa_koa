'use strict';

import { getMyInfoData } from '../utils/api';

export const MY_GET_SUCCESS = 'MY_GET_SUCCESS';
export const MY_GET_FAILURE = 'MY_GET_FAILURE';

function getMySuccess(json) {
    return {
        type: MY_GET_SUCCESS,
        payload: json
    };
}

function getMyFailure(err) {
    return {
        type: MY_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function getMyInfo(uid) {
    return (dispatch) => {
        getMyInfoData(uid, (json) => {
            dispatch(getMySuccess(json));
        }, (err) => {
            dispatch(getMyFailure(err));
        });
    };
}

