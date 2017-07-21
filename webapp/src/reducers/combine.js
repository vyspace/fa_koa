'use strict';

import { combineReducers } from 'redux';
import routing from './routing';
import home from './home';

const rootReducer = combineReducers({
    home
});

export default rootReducer;

