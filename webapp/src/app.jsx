'use strict';

import React from 'react';
import {render} from 'react-dom';
import {Provider} from 'react-redux';
import appStore from './store/appStore';
import routes from './routes';
import Header from './components/Header';


const store = appStore(),
    rootElement = document.getElementById('root');
render(
    <Provider store={store}>
        <div>
        <Header/>
        {routes}
        </div>
    </Provider>
    , rootElement
);


