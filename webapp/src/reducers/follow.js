'use strict';

import { FOLLOW_GET, FOLLOW_GET_SUCCESS, FOLLOW_GET_FAILURE } from '../actions/follow';

export default function comment(state = {
    isFetching: true,
    scrollTop: 0 }, action) {
    switch(action.type) {
    case FOLLOW_GET_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case FOLLOW_GET_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case FOLLOW_GET:
        state.isFetching = true;
        return state;
    default:
        return state;
    }
}

