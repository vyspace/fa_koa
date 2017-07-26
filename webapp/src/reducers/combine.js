'use strict';

import { combineReducers } from 'redux';
import header from './header';
import home from './home';
import comment from './comment';

const rootReducer = combineReducers({
    header,
    home,
    comment
});

export default rootReducer;

