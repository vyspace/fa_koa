'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class My extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '我的',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'base' });
    }
    render() {
        return (
            <h1>My</h1>
        );
    }
}

My.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default My;
