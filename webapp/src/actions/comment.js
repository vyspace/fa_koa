'use strict';

import { getCommentList } from '../utils/api';

export const COMMENT_GET = 'COMMENT_GET';
export const COMMENT_GET_SUCCESS = 'COMMENT_GET_SUCCESS';
export const COMMENT_GET_FAILURE = 'COMMENT_GET_FAILURE';
export const COMMENT_SCROLL_TOP = 'COMMENT_SCROLL_TOP';
export const COMMENT_PARAMS = 'COMMENT_PARAMS';

function getComment() {
    return {
        type: COMMENT_GET
    };
}

function getCommentSuccess(json) {
    return {
        type: COMMENT_GET_SUCCESS,
        payload: json
    };
}

function getCommentFailure(err) {
    return {
        type: COMMENT_GET_FAILURE,
        payload: err
    };
}

export function saveScrollTop(payload) {
    return {
        type: COMMENT_SCROLL_TOP,
        payload
    };
}

export function saveParams(payload) {
    return {
        type: COMMENT_PARAMS,
        payload
    };
}

export function getCommentData() {
    return (dispatch) => {
        dispatch(getComment());
        getCommentList((json) => {
            dispatch(getCommentSuccess(json));
        }, (err) => {
            dispatch(getCommentFailure(err));
        });
    };
}

