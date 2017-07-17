'use strict';

import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import appStore from './store/appStore';
import routes from './router/routes';
import Header from './components/Header';
import Footer from './components/Footer';


const store = appStore(),
    rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <div>
            <Header />
            <div className="body-view">
                {routes}
            </div>
            <Footer />
        </div>
    </Provider>
    , rootElement
);

