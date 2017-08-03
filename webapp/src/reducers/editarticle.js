'use strict';

import { EDIT_ARTICLE_SAVE } from '../actions/editarticle';

export default function article(state = { data: null }, action) {
    switch(action.type) {
    case EDIT_ARTICLE_SAVE:
        state.data = action.payload;
        return state;
    default:
        return state;
    }
}

