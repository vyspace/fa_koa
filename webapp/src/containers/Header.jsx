'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import HomeHeader from '../components/HomeHeader';
import BaseHeader from '../components/BaseHeader';
import * as HeaderActions from '../actions/header';

class Header extends Component {
    render() {
        const { header } = this.props.store;
        let viewHeight;
        let html;
        switch (header.type) {
            case 'home':
                html = <HomeHeader />;
                viewHeight = '3rem';
                break;
            case 'base':
                html = <BaseHeader data={header} />;
                viewHeight = '2.51rem';
                break;
            default:
                break;
        }
        return (
            <div className="header-view" style={{ height: viewHeight }}>
                {html}
            </div>
        );
    }
}

Header.propTypes = {
    store: PropTypes.object.isRequired
};

function mapStateToProps(store) {
    return { store };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HeaderActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
