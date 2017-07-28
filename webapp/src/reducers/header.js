'use strict';

import { HEADER_UPDATE } from '../actions/header';

export default function header(state = {
    type: 'base',
    title: 'Header',
    isBack: false,
    backHandler: null,
    rBtn: {
        type: 'txt',
        content: '',
        handler: null
    }
}, action) {
    switch(action.type) {
    case HEADER_UPDATE:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}

