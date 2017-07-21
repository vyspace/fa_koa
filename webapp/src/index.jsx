'use strict';

import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import configureStore from './store/configureStore';
import Root from './containers/Root';

const store = configureStore();
const browserHistory = createHistory();

render(
    <Root store={store} history={browserHistory} />,
    document.getElementById('root')
);
