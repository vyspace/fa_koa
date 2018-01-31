'use strict';

import { MY_GET_SUCCESS, HMY_GET_FAILURE } from '../actions/my';

export default function home(state = {
    isFetching: true}, action) {
    switch(action.type) {
        case MY_GET_SUCCESS:
        case HMY_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        default:
            return state;
    }
}

