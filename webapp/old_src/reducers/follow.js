'use strict';

import { FOLLOW_GET_SUCCESS, FOLLOW_GET_FAILURE } from '../actions/follow';

export default function comment(state = {
    isFetching: true,
    scrollTop: 0 }, action) {
    switch(action.type) {
        case FOLLOW_GET_SUCCESS:
        case FOLLOW_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        default:
            return state;
    }
}

