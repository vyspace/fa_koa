'use strict';

import { ARTICLE_GET_SUCCESS, ARTICLE_GET_FAILURE, PREVIEW_GET } from '../actions/article';

export default function article(state = { isFetching: true }, action) {
    switch(action.type) {
        case ARTICLE_GET_SUCCESS:
        case ARTICLE_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case PREVIEW_GET:
            state.isFetching = false;
            return state;
        default:
            return state;
    }
}

