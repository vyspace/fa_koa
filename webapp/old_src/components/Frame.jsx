'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Frame extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '文章',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('frame');
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        const { link } = this.props.store.home.pageParams;
        return (
            <iframe className="frame" title="link" style={{ minHeight: g.bodyMinHeight }} src={link} />
        );
    }
}

Frame.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Frame;
