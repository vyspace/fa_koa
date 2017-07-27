'use strict';

import { UPDATE } from '../actions/header';

export default function header(state = {
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
    case UPDATE:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}

