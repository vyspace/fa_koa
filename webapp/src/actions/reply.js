'use strict';

import { getReplyData } from '../utils/api';

export const REPLY_GET_SUCCESS = 'REPLY_GET_SUCCESS';
export const REPLY_GET_FAILURE = 'REPLY_GET_FAILURE';
export const REPLY_SCROLL_TOP = 'COMMENT_SCROLL_TOP';
export const REPLY_PAGE_PARAMS = 'REPLY_PAGE_PARAMS';

function getReplySuccess(json) {
    return {
        type: REPLY_GET_SUCCESS,
        payload: json
    };
}

function getReplyFailure(err) {
    return {
        type: REPLY_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function saveScrollTop(payload) {
    return {
        type: REPLY_SCROLL_TOP,
        payload
    };
}

export function savePageParams(payload) {
    return {
        type: REPLY_PAGE_PARAMS,
        payload
    };
}

export function getReplyList(uid) {
    return (dispatch) => {
        getReplyData(uid, (json) => {
            dispatch(getReplySuccess(json));
        }, (err) => {
            dispatch(getReplyFailure(err));
        });
    };
}
