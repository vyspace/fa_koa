'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Comment from '../containers/Comment';
import EidtComment from '../containers/EditComment';
import NotFound from '../components/NotFound';

export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/editcomment" component={EidtComment} />
        <Route component={NotFound} />
    </Switch>;
