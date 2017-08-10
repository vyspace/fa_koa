'use strict';

import { REPLY_GET, REPLY_GET_SUCCESS, REPLY_GET_FAILURE, REPLY_SCROLL_TOP, REPLY_PARAMS } from '../actions/reply';

export default function article(state = { isFetching: true }, action) {
    switch(action.type) {
    case REPLY_GET_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case REPLY_GET_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case REPLY_SCROLL_TOP:
        state.scrollTop = action.payload;
        return state;
    case REPLY_PARAMS:
        state.params = action.payload;
        return state;
    case REPLY_GET:
        state.isFetching = true;
        return state;
    default:
        return state;
    }
}

