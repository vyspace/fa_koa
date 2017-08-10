'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Comment from '../containers/Comment';
import EidtComment from '../containers/EditComment';
import Article from '../containers/Article';
import Reply from '../containers/Reply';
import My from '../containers/My';
import EditArticle from '../containers/EditArticle';
import NotFound from '../components/NotFound';

export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/editcomment" component={EidtComment} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/reply" component={Reply} />
        <Route exact path="/my" component={My} />
        <Route exact path="/editarticle" component={EditArticle} />
        <Route component={NotFound} />
    </Switch>;
