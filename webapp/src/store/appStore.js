'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import reducer from '../reducers/combine';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

export default function appStore(state) {
    return createStoreWithMiddleware(reducer, state);
}

