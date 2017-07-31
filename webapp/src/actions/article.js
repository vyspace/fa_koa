'use strict';

import { getArticleData } from '../utils/api';

export const ARTICLE_GET = 'GET_COMMENT';
export const ARTICLE_GET_SUCCESS = 'GET_COMMENT_SUCCESS';
export const ARTICLE_GET_FAILURE = 'GET_COMMENT_FAILURE';

function getArticle() {
    return {
        type: ARTICLE_GET
    };
}

function getArticleSuccess(json) {
    return {
        type: ARTICLE_GET_SUCCESS,
        payload: json
    };
}

function getArticleFailure(err) {
    return {
        type: ARTICLE_GET_FAILURE,
        payload: err
    };
}

export function getArtData(aid) {
    return (dispatch) => {
        dispatch(getArticle());
        getArticleData(aid, (json) => {
            dispatch(getArticleSuccess(json));
        }, (err) => {
            dispatch(getArticleFailure(err));
        });
    };
}

