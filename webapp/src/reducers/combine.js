'use strict';

import { combineReducers } from 'redux';
import header from './header';
import footer from './footer';
import home from './home';
import popup from './popup';
import comment from './comment';
import search from './search';
import article from './article';

const rootReducer = combineReducers({
    header,
    footer,
    home,
    popup,
    comment,
    search,
    article
});

export default rootReducer;

