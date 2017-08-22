'use strict';

import { getShortUrl } from '../utils/api';

export const EDIT_LINK__GET = 'EDIT_LINK__GET';
export const EDIT_LINK_SHORT_SUCCESS = 'EDIT_LINK_SHORT_SUCCESS';
export const EDIT_LINK_SHORT_FAILURE = 'EDIT_LINK_SHORT_FAILURE';

export function getArticle() {
    return {
        type: EDIT_LINK__GET
    };
}

function getShortSuccess(json) {
    return {
        type: EDIT_LINK_SHORT_SUCCESS,
        payload: json
    };
}

function getShortFailure(err) {
    return {
        type: EDIT_LINK_SHORT_FAILURE,
        payload: err
    };
}

export function getSUrlData(long) {
    return (dispatch) => {
        getShortUrl(long, (json) => {
            dispatch(getShortSuccess(json));
        }, (err) => {
            dispatch(getShortFailure(err));
        });
    };
}

