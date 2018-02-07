'use strict';

import React from 'react';
import { render } from 'react-dom';
import createHistory from 'history/createBrowserHistory';
import FastClick from 'fastclick';
import configureStore from './store/configureStore';
import Root from './containers/Root';
import { isMobileBrowser } from './utils/tools';
// import { saveSession, testLogin } from './store/persistence';

const browserHistory = createHistory(),
    store = configureStore(),
    g = window.FaKoa;

store.subscribe(() => saveSession(store.getState()));

// 添加assign方法
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

// 移动端阻止双击变焦
if(isMobileBrowser()) {
    window.FaKoa.isMobile = true;
    let lastTouchEnd = 0;
    document.addEventListener('touchstart', (e) => {
        if(e.touches.length > 1) {
            e.preventDefault();
        }
    }, true);

    document.addEventListener('touchend', (e) => {
        const now = (new Date()).getTime();
        if(now - lastTouchEnd <= 300) {
            e.preventDefault();
        }
        lastTouchEnd = now;
    }, true);
}

// 初始化FastClick事件
FastClick.attach(document.body);

// 初始化bodyMinHeight
g.bodyMinHeight = `${window.innerHeight - (g.fontSize * 2.51)}px`;

// g.isAuthenticated = testLogin();

render(
<Root store={store} history={browserHistory} />,
document.getElementById('root')
);
