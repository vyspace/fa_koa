'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as FooterActions from '../actions/footer';

class Footer extends Component {
    render() {
        return <div className="footer-view" />;
    }
}

Footer.propTypes = {

};

function mapStateToProps(store) {
    return { store };
}

function mapDispatchToProps(dispatch) {
    return {
        footerAction: bindActionCreators(FooterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
