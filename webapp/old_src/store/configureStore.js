'use strict';

import { createStore, applyMiddleware } from 'redux';
import thunkMiddleware from 'redux-thunk';
import rootReducer from '../reducers/combine';

const createStoreWithMiddleware = applyMiddleware(thunkMiddleware)(createStore);

function configureStore() {
    return createStoreWithMiddleware(rootReducer);
}

export default configureStore;

