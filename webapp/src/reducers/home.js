'use strict';

import { HOME_GET, HOME_GET_SUCCESS, HOME_GET_FAILURE, HOME_SCROLL_TOP } from '../actions/home';

export default function home(state = {
    isFetching: true,
    scrollTop: 0
}, action) {
    switch(action.type) {
        case HOME_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case HOME_GET_FAILURE:
            state.isFetching = false;
            return state;
        case HOME_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case HOME_GET:
            state.isFetching = true;
            return state;
        default:
            return state;
    }
}
