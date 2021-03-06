'use strict';

import { getArticleData } from '../utils/api';

export const ARTICLE_GET = 'ARTICLE_GET';
export const ARTICLE_GET_SUCCESS = 'ARTICLE_GET_SUCCESS';
export const ARTICLE_GET_FAILURE = 'ARTICLE_GET_FAILURE';
export const PREVIEW_GET = 'PREVIEW_GET';


function getArticleSuccess(json) {
    return {
        type: ARTICLE_GET_SUCCESS,
        payload: json
    };
}

function getArticleFailure(err) {
    return {
        type: ARTICLE_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function getArticle(aid) {
    return (dispatch) => {
        getArticleData(aid, (json) => {
            dispatch(getArticleSuccess(json));
        }, (err) => {
            dispatch(getArticleFailure(err));
        });
    };
}

export function getPreviewData() {
    return {
        type: PREVIEW_GET
    };
}

