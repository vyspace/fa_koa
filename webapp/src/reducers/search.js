'use strict';

import { SEARCH_UPDATE } from '../actions/popup';

export default function header(state = {}, action) {
    switch(action.type) {
    case SEARCH_UPDATE:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}

