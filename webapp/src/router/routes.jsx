'use strict';

import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Home from '../containers/home';
import NotFound from '../components/NotFound';
export default
    <Router>
        <Switch>
        <Route path="/" exact component={Home} />
        <Route component={NotFound} />
        </Switch>
    </Router>
