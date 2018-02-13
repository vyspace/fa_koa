'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import * as HeaderActions from '../actions/header';

const g = window.FaKoa;

class About extends Component {
    componentWillMount() {
        const { history } = this.props,
            { updateHeader } = this.props.headerAction;
        updateHeader({
            type: 'base',
            title: 'About',
            isBack: true,
            theHistory: history,
            rBtn: null
        });
    }
    render() {
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="flex fcm"
          style={{ height: g.bodyMinHeight }}
        >
            <ul className="about potr-mid">
                <li className="pd5"><div className="logo" /></li>
                <li className="pd20">TrendDiary - α 0.1.0</li>
                <li className="pd5 txid">通过CSS3,我们能够创建动画,这可以在许多网页中取代动画图片、Flash 动画以及 JavaScript。CSS3 动画CSS3 @keyframes 规则 如需在 CSS3 中创建动画,您需要学习 </li>
                <li>建议邮箱: aaa@xxx.com</li>
            </ul>
        </div>);
    }
}

About.propTypes = {
    history: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired
};

function mapStateToProps(store) {
    return { store };
}

function mapDispatchToProps(dispatch) {
    return {
        headerAction: bindActionCreators(HeaderActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
