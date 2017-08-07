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

window.FaKoa.history = browserHistory;

if (typeof Object.assign !== 'function') {
    Object.assign = function (target, ...args) {
        if (target === null) {
            target = {};
        }
        target = Object(target);
        for (let index = 1; index < args.length; index += 1) {
            const source = args[index];
            if (source !== null) {
                for (const key in source) {
                    if (Object.prototype.hasOwnProperty.call(source, key)) {
                        target[key] = source[key];
                    }
                }
            }
        }
        return target;
    };
}

render(
    <Root store={store} history={browserHistory} />,
    document.getElementById('root')
);
