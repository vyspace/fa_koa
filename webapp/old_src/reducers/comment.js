'use strict';

import { COMMENT_GET_SUCCESS, COMMENT_GET_FAILURE, COMMENT_SCROLL_TOP, COMMENT_PAGE_PARAMS } from '../actions/comment';

export default function comment(state = {
    isFetching: true,
    scrollTop: 0 }, action) {
    switch(action.type) {
        case COMMENT_GET_SUCCESS:
        case COMMENT_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case COMMENT_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case COMMENT_PAGE_PARAMS:
            state.pageParams = action.payload;
            return state;
        default:
            return state;
    }
}

