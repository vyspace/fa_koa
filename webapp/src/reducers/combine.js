'use strict';

import { combineReducers } from 'redux';
import home from './home';
import comment from './comment';

const rootReducer = combineReducers({
    home,
    comment
});

export default rootReducer;

