'use strict';

import { REPLY_GET_SUCCESS, REPLY_GET_FAILURE, REPLY_SCROLL_TOP, REPLY_PAGE_PARAMS } from '../actions/reply';

export default function article(state = { isFetching: true }, action) {
    switch(action.type) {
        case REPLY_GET_SUCCESS:
        case REPLY_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case REPLY_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case REPLY_PAGE_PARAMS:
            state.pageParams = action.payload;
            return state;
        default:
            return state;
    }
}

