'use strict';

import { LOGIN_POST_SUCCESS, LOGIN_POST_FAILUR } from '../actions/login';

export default function article(state = { isFetching: true }, action) {
    switch(action.type) {
        case LOGIN_POST_SUCCESS:
            state = action.payload;
            return state;
        case LOGIN_POST_FAILUR:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        default:
            return state;
    }
}
