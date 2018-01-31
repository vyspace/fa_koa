'use strict';

import { getShortUrl } from '../utils/api';

export const EDIT_LINK_SHORT_SUCCESS = 'EDIT_LINK_SHORT_SUCCESS';
export const EDIT_LINK_SHORT_FAILURE = 'EDIT_LINK_SHORT_FAILURE';

function getShortSuccess(json) {
    return {
        type: EDIT_LINK_SHORT_SUCCESS,
        payload: json
    };
}

function getShortFailure(err) {
    return {
        type: EDIT_LINK_SHORT_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
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

