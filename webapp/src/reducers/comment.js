'use strict';

import { GET_COMMENT, GET_COMMENT_SUCCESS, GET_COMMENT_FAILURE } from '../actions/comment';

export default function comment(state = { isFetching: true }, action) {
    switch(action.type) {
    case GET_COMMENT:
        state.isFetching = true;
        return state;
    case GET_COMMENT_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case GET_COMMENT_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case GET_COMMENT:
    default:
        return state;
    }
}

