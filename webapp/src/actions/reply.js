'use strict';

import { getReplyList } from '../utils/api';

export const REPLY_GET = 'REPLY_GET';
export const REPLY_GET_SUCCESS = 'REPLY_GET_SUCCESS';
export const REPLY_GET_FAILURE = 'REPLY_GET_FAILURE';
export const REPLY_SCROLL_TOP = 'COMMENT_SCROLL_TOP';
export const REPLY_PARAMS = 'REPLY_PARAMS';

export function getReply() {
    return {
        type: REPLY_GET
    };
}

function getReplySuccess(json) {
    return {
        type: REPLY_GET_SUCCESS,
        payload: json
    };
}

function getReplyFailure(err) {
    return {
        type: REPLY_GET_FAILURE,
        payload: err
    };
}

export function saveScrollTop(payload) {
    return {
        type: REPLY_SCROLL_TOP,
        payload
    };
}

export function saveParams(payload) {
    return {
        type: REPLY_PARAMS,
        payload
    };
}

export function getReplyData(uid) {
    return (dispatch) => {
        dispatch(getReply());
        getReplyList(uid, (json) => {
            dispatch(getReplySuccess(json));
        }, (err) => {
            dispatch(getReplyFailure(err));
        });
    };
}
