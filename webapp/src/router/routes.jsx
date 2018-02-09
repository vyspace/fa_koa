'use strict';

import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import Home from '../containers/Home';
import Content from '../containers/Content';

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
    </Switch>;
