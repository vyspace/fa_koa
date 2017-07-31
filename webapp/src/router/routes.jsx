'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Comment from '../containers/Comment';
import EidtComment from '../containers/EditComment';
import Article from '../containers/Article';
import Search from '../containers/Search';
import NotFound from '../components/NotFound';

export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/editcomment" component={EidtComment} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/search" component={Search} />
        <Route component={NotFound} />
    </Switch>;
