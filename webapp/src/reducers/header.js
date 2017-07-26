'use strict';

import { UPDATE } from '../actions/header';

export default function comment(state = {
    title: 'Header',
    isBack: false,
    rBtn: []
}, action) {
    switch(action.type) {
    case UPDATE:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}

