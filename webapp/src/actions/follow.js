'use strict';

import { getFollowList } from '../utils/api';

export const FOLLOW_GET = 'FOLLOW_GET';
export const FOLLOW_GET_SUCCESS = 'FOLLOW_GET_SUCCESS';
export const FOLLOW_GET_FAILURE = 'FOLLOW_GET_FAILURE';

function getFollow() {
    return {
        type: FOLLOW_GET
    };
}

function getFollowSuccess(json) {
    return {
        type: FOLLOW_GET_SUCCESS,
        payload: json
    };
}

function getFollowFailure(err) {
    return {
        type: FOLLOW_GET_FAILURE,
        payload: err
    };
}

export function getFollowData() {
    return (dispatch) => {
        dispatch(getFollow());
        getFollowList((json) => {
            dispatch(getFollowSuccess(json));
        }, (err) => {
            dispatch(getFollowFailure(err));
        });
    };
}

