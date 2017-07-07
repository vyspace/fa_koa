'use strict';

import {INCREMENT} from '../actions/counter';

export default function counter(state=0, action) {
    switch (action.type) {
        case INCREMENT:
            return state+1;
        default:
            return state;
    }
}