'use strict';

import { MY_HOME_GET, MY_HOME_GET_SUCCESS, MY_HOME_GET_FAILURE } from '../actions/myhome';

export default function home(state = {
    isFetching: true,
    scrollTop: 0
}, action) {
    switch(action.type) {
        case MY_HOME_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case MY_HOME_GET_FAILURE:
            state.isFetching = false;
            return state;
        case MY_HOME_GET:
            state.isFetching = true;
            return state;
        default:
            return state;
    }
}
