'use strict';

import { combineReducers } from 'redux';
import header from './header';
import footer from './footer';
import home from './home';
import comment from './comment';

const rootReducer = combineReducers({
    header,
    footer,
    home,
    comment
});

export default rootReducer;

