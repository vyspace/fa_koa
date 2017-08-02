'use strict';

import { RECORD_ORIGINAL } from '../actions/record';

export default function article(state = { original: '' }, action) {
    switch(action.type) {
    case RECORD_ORIGINAL:
        state.original = action.payload;
        return state;
    default:
        return state;
    }
}
