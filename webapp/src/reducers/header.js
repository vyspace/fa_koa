'use strict';

import { HEADER_UPDATE } from '../actions/header';

export default function header(state = {
    type: 'home',
    title: 'Home',
    isBack: false,
    theHistory: null,
    rBtn: null
}, action) {
    switch(action.type) {
        case HEADER_UPDATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}

