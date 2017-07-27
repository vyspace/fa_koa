'use strict';

import { UPDATE } from '../actions/footer';

export default function footer(state = {
    type: 'home'
}, action) {
    switch(action.type) {
    case UPDATE:
        return Object.assign({}, state, action.payload);
    default:
        return state;
    }
}
