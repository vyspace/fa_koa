'use strict';

import { MY_HOME_GET_SUCCESS, MY_HOME_GET_FAILURE } from '../actions/myhome';

export default function home(state = {
    isFetching: true,
    scrollTop: 0
}, action) {
    switch(action.type) {
        case MY_HOME_GET_SUCCESS:
        case MY_HOME_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        default:
            return state;
    }
}
