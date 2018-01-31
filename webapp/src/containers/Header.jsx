'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as HeaderActions from '../actions/headera';

class Header extends Component {
    componentWillMount() {
    }
    render() {
        const { header } = this.props.store;

        return (
            <div className="header-view" />
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
