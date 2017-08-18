'use strict';

import { USER_INFO_SAVE } from '../actions/userinfo';

export default function article(state = { data: null }, action) {
    switch(action.type) {
    case USER_INFO_SAVE:
        state.data = action.payload;
        return state;
    default:
        return state;
    }
}

