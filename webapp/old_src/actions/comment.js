'use strict';

import { getCommentData } from '../utils/api';

export const COMMENT_GET_SUCCESS = 'COMMENT_GET_SUCCESS';
export const COMMENT_GET_FAILURE = 'COMMENT_GET_FAILURE';
export const COMMENT_SCROLL_TOP = 'COMMENT_SCROLL_TOP';
export const COMMENT_PAGE_PARAMS = 'COMMENT_PAGE_PARAMS';
export const COMMENT_UPDATE_SUCCESS = 'COMMENT_UPDATE_SUCCESS';

function getCommentSuccess(json) {
    return {
        type: COMMENT_GET_SUCCESS,
        payload: json
    };
}

function getCommentFailure(err) {
    return {
        type: COMMENT_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function saveScrollTop(payload) {
    return {
        type: COMMENT_SCROLL_TOP,
        payload
    };
}

export function savePageParams(payload) {
    return {
        type: COMMENT_PAGE_PARAMS,
        payload
    };
}

export function getCommentList(obj) {
    return (dispatch) => {
        getCommentData(obj, (json) => {
            dispatch(getCommentSuccess(json));
        }, (err) => {
            dispatch(getCommentFailure(err));
        });
    };
}

export function updateCommentList(obj, success, failure) {
    return () => {
        getCommentData(obj, (json) => {
            success(json);
        }, (err) => {
            failure(err);
        });
    };
}

