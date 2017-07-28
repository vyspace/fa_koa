'use strict';

import { HOME_GET, HOME_GET_SUCCESS, HOME_GET_FAILURE, HOME_PARAMS, HOME_SCROLL_TOP } from '../actions/home';

export default function home(state = {
    isFetching: true,
    scrollTop: 0
}, action) {
    switch(action.type) {
    case HOME_GET_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case HOME_GET_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case HOME_PARAMS:
        state.params = action.payload;
        return state;
    case HOME_SCROLL_TOP:
        state.scrollTop = action.payload;
        return state;
    case HOME_GET:
    default:
        return state;
    }
}
