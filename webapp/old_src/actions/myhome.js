'use strict';

import { getMyHomeData } from '../utils/api';

export const MY_HOME_GET_SUCCESS = 'MY_HOME_GET_SUCCESS';
export const MY_HOME_GET_FAILURE = 'MY_HOME_GET_FAILURE';

function getMyHomeSuccess(json) {
    return {
        type: MY_HOME_GET_SUCCESS,
        payload: json
    };
}

function getMyHomeFailure(err) {
    return {
        type: MY_HOME_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function getMyHome(userId) {
    return (dispatch) => {
        getMyHomeData(userId, (json) => {
            dispatch(getMyHomeSuccess(json));
        }, (err) => {
            dispatch(getMyHomeFailure(err));
        });
    };
}
