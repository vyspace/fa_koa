'use strict';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../containers/Home';
import Content from '../containers/Content';
import Login from '../containers/Login';
import Register from '../containers/Register';
import ForgetPwd from '../containers/ForgetPwd';
import WriteMsg from '../containers/EditMsg';

const PrivateRoute = ({ component: Component }) => (
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

PrivateRoute.propTypes = {
    component: PropTypes.object.isRequired,
    location: PropTypes.object.isRequired
};

export default
    <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/content" component={Content} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/forget" component={ForgetPwd} />
        <Route exact path="/writemsg" component={WriteMsg} />
    </Switch>;
