'use strict';

import { POPUP_TOGGLE } from '../actions/popup';

export default function header(state = { toggle: false }, action) {
    switch(action.type) {
    case POPUP_TOGGLE:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}

