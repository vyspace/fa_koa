'use strict';

import { EDIT_LINK__GET, EDIT_LINK_SHORT_SUCCESS, EDIT_LINK_SHORT_FAILURE } from '../actions/editlink';

export default function article(state = { data: null }, action) {
    switch(action.type) {
        case EDIT_LINK_SHORT_SUCCESS:
            state.data = action.payload;
            return state;
        case EDIT_LINK_SHORT_FAILURE:
            state.data = action.payload;
        default:
            return state;
    }
}

