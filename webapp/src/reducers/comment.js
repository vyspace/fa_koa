'use strict';

import { COMMENT_GET, COMMENT_GET_SUCCESS, COMMENT_GET_FAILURE, COMMENT_SCROLL_TOP, COMMENT_PARAMS } from '../actions/comment';

export default function comment(state = {
    isFetching: true,
    scrollTop: 0 }, action) {
    switch(action.type) {
        case COMMENT_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case COMMENT_GET_FAILURE:
            state.isFetching = false;
            return state;
        case COMMENT_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case COMMENT_PARAMS:
            state.params = action.payload;
            return state;
        case COMMENT_GET:
            state.isFetching = true;
            return state;
        default:
            return state;
    }
}

