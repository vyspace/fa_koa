'use strict';

import { RECORD_ORIGIN } from '../actions/record';

export default function article(state = { origin: '' }, action) {
    switch(action.type) {
        case RECORD_ORIGIN:
            state.origin = action.payload;
            return state;
        default:
            return state;
    }
}
