'use strict';

import { FOOTER_UPDATE } from '../actions/footer1';

export default function footer(state = {
    type: 'home'
}, action) {
    switch(action.type) {
        case FOOTER_UPDATE:
            return Object.assign({}, state, action.payload);
        default:
            return state;
    }
}
