'use strict';

import { getFollowData } from '../utils/api';

export const FOLLOW_GET_SUCCESS = 'FOLLOW_GET_SUCCESS';
export const FOLLOW_GET_FAILURE = 'FOLLOW_GET_FAILURE';

function getFollowSuccess(json) {
    return {
        type: FOLLOW_GET_SUCCESS,
        payload: json
    };
}

function getFollowFailure(err) {
    return {
        type: FOLLOW_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function getFollowList(uid) {
    return (dispatch) => {
        getFollowData(uid, (json) => {
            dispatch(getFollowSuccess(json));
        }, (err) => {
            dispatch(getFollowFailure(err));
        });
    };
}

