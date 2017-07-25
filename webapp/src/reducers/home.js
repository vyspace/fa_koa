'use strict';

import { GET_HOME, GET_HOME_SUCCESS, GET_HOME_FAILURE, SAVE_PARAMS, SAVE_SCROLL_TOP } from '../actions/home';

export default function home(state = {
    isFetching: true,
    scrollTop: 0
}, action) {
    switch(action.type) {
    case GET_HOME_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case GET_HOME_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case SAVE_PARAMS:
        state.params = action.payload;
        return state;
    case SAVE_SCROLL_TOP:
        state.scrollTop = action.payload;
        return state;
    case GET_HOME:
    default:
        return state;
    }
}
