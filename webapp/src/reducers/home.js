'use strict';

import { GET_HOME, GET_HOME_SUCCESS, GET_HOME_FAILURE } from '../actions/home';

export default function home(state = { isFetching: false }, action) {
    switch(action.type) {
    case GET_HOME:
        return Object.assign({}, state, { isFetching: true });
    case GET_HOME_SUCCESS:
        return Object.assign({}, state, { isFetching: false });
    case GET_HOME_FAILURE:
        return Object.assign({}, state, { isFetching: false });
    default:
        return state;
    }
}
