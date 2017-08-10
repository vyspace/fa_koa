'use strict';

import { combineReducers } from 'redux';
import header from './header';
import footer from './footer';
import record from './record';
import home from './home';
import popup from './popup';
import comment from './comment';
import reply from './reply';
import article from './article';
import editarticle from './editarticle';

const rootReducer = combineReducers({
    header,
    footer,
    record,
    home,
    popup,
    comment,
    reply,
    article,
    editarticle
});

export default rootReducer;

