'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import NotFound from '../components/NotFound';
export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route component={NotFound} />
    </Switch>;
