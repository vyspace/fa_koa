'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeHeader from '../components/HomeHeader';
import * as HeaderActions from '../actions/header';

class Header extends Component {
    render() {
        return (
            <div className="header-view">
                <HomeHeader />
            </div>
        );
    }
}

Header.propTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HeaderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
