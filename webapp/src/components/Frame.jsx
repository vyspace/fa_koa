'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Frame extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '文章',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        const { link } = this.props.store.home.params;
        return (
            <iframe className="frame" title="link" style={{ minHeight: g.bodyMinHeight }} src={link} />
        );
    }
}

Frame.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Frame;
