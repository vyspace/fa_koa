'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import {Router} from 'react-router';
import appStore from './store/appStore';
import routes from './routes';
import createHistory from 'history/createBrowserHistory'

const store = appStore();

function createElements() {
    const elements = [
        <Router key="router"  children={routes} />
    ];
    return elements;
}

const history = createHistory();
const rootElement = document.getElementById('root');
render(
    <Provider store={store} key="privider">
        <Router key="router" history={history} children={routes} />
    </Provider>
    , rootElement
);


