'use strict';

import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import { saveStore } from './store/persistence';
import Root from './containers/Root';

const browserHistory = createHistory(),
    store = configureStore();

store.subscribe(() => saveStore(store.getState()));

window.FaKoa = Object.seal({
    history: browserHistory
});

render(
    <Root store={store} history={browserHistory} />,
    document.getElementById('root')
);
