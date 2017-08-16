'use strict';

import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from '../containers/Home';
import Comment from '../containers/Comment';
import EidtComment from '../containers/EditComment';
import Article from '../containers/Article';
import Reply from '../containers/Reply';
import EditArticle from '../containers/EditArticle';
import My from '../containers/My';
import Profile from '../containers/Profile';
import PhotoAlbum from '../containers/PhotoAlbum';
import Admin from '../containers/Admin';
import About from '../containers/About';
import UserInfo from '../containers/UserInfo';
import NotFound from '../components/NotFound';

export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comment" component={Comment} />
        <Route exact path="/editcomment" component={EidtComment} />
        <Route exact path="/article" component={Article} />
        <Route exact path="/reply" component={Reply} />
        <Route exact path="/editarticle" component={EditArticle} />
        <Route exact path="/my" component={My} />
        <Route exact path="/profile" component={Profile} />
        <Route exact path="/photoalbum" component={PhotoAlbum} />
        <Route exact path="/admin" component={Admin} />
        <Route exact path="/about" component={About} />
        <Route exact path="/userinfo" component={UserInfo} />
        <Route component={NotFound} />
    </Switch>;
