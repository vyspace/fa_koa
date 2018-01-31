'use strict';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Home from '../containers/Home';
import Comment from '../containers/Comment';
import EidtComment from '../containers/EditComment';
import Article from '../containers/Article';
import Reply from '../containers/Reply';
import EditBlog from '../containers/EditBlog';
import EditArticle from '../containers/EditArticle';
import EditLink from '../containers/EditLink';
import My from '../containers/My';
import Profile from '../containers/Profile';
import MyHome from '../containers/MyHome';
import PhotoAlbum from '../containers/PhotoAlbum';
import Admin from '../containers/Admin';
import About from '../containers/About';
import UserInfo from '../containers/UserInfo';
import Follow from '../containers/Follow';
import Frame from '../containers/Frame';
import Login from '../containers/Login';
import Register from '../containers/Register';
import RegFinish from '../containers/RegFinish';
import FindPassword from '../containers/FindPassword';
import Feedback from '../containers/Feedback';
import BasicInfo from '../containers/BasicInfo';
import NotFound from '../components/NotFound';

const PrivateRoute = ({ component: Component}) => (
    <Route render={props => (
        window.FaKoa.isAuthenticated ? (
            <Component {...props} />
        ) : (
            <Redirect to={{
                pathname: '/login',
                state: { from: props.location }
            }}
            />
        )
    )}
    />
);

export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/comment" component={Comment} />
        <PrivateRoute exact path="/editcomment" component={EidtComment} />
        <PrivateRoute exact path="/article" component={Article} />
        <PrivateRoute exact path="/reply" component={Reply} />
        <PrivateRoute exact path="/editblog" component={EditBlog} />
        <PrivateRoute exact path="/editarticle" component={EditArticle} />
        <PrivateRoute exact path="/editlink" component={EditLink} />
        <PrivateRoute exact path="/my" component={My} />
        <PrivateRoute exact path="/profile" component={Profile} />
        <Route exact path="/myhome" component={MyHome} />
        <Route exact path="/photoalbum" component={PhotoAlbum} />
        <PrivateRoute exact path="/admin" component={Admin} />
        <PrivateRoute exact path="/about" component={About} />
        <PrivateRoute exact path="/userinfo" component={UserInfo} />
        <Route exact path="/basicinfo" component={BasicInfo} />
        <PrivateRoute exact path="/follow" component={Follow} />
        <PrivateRoute exact path="/frame" component={Frame} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/regfinish" component={RegFinish} />
        <Route exact path="/findpassword" component={FindPassword} />
        <PrivateRoute exact path="/feedback" component={Feedback} />
        <Route component={NotFound} />
    </Switch>;
