'use strict';

import { getCommentList } from '../utils/api';

export const COMMENT_GET = 'GET_COMMENT';
export const COMMENT_GET_SUCCESS = 'GET_COMMENT_SUCCESS';
export const COMMENT_GET_FAILURE = 'GET_COMMENT_FAILURE';
export const COMMENT_SCROLL_TOP = 'COMMENT_SCROLL_TOP'

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

function savest(payload) {
    return {
        type: COMMENT_SCROLL_TOP,
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

export function saveScrollTop(payload) {
    return (dispatch) => {
        dispatch(savest(payload));
    };
}

