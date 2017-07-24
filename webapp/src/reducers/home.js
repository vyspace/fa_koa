'use strict';

import { GET_HOME, GET_HOME_SUCCESS, GET_HOME_FAILURE, SAVE_COMMENT_INDEX } from '../actions/home';

export default function home(state = {
    isFetching: true,
    data: null
}, action) {
    switch(action.type) {
    case GET_HOME:
        return state;
    case GET_HOME_SUCCESS:
        state.data = action.payload;
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case GET_HOME_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case SAVE_COMMENT_INDEX:
        state.rows = action.payload;
        return state;
    default:
        return state;
    }
}
