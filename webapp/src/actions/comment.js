'use strict';

import { getCommentList } from '../utils/api';

export const GET_COMMENT = 'GET_COMMENT';
export const GET_COMMENT_SUCCESS = 'GET_COMMENT_SUCCESS';
export const GET_COMMENT_FAILURE = 'GET_COMMENT_FAILURE';

function getComment() {
    return {
        type: GET_COMMENT
    };
}

function getCommentSuccess(json) {
    return {
        type: GET_COMMENT_SUCCESS,
        payload: json
    };
}

function getCommentFailure(err) {
    return {
        type: GET_COMMENT_FAILURE,
        payload: err
    };
}

export function getCommentData() {
    return (dispatch, getState) => {
        const xx = getState();
        const a = 1;
        // dispatch(getComment());
        // getCommentList((json) => {
        //     dispatch(getCommentSuccess(json));
        // }, (err) => {
        //     dispatch(getCommentFailure(err));
        // });
    };
}

