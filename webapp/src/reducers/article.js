'use strict';

import { ARTICLE_GET, ARTICLE_GET_SUCCESS, ARTICLE_GET_FAILURE } from '../actions/article';

export default function article(state = { isFetching: true }, action) {
    switch(action.type) {
    case ARTICLE_GET_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case ARTICLE_GET_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case ARTICLE_GET:
    default:
        return state;
    }
}

