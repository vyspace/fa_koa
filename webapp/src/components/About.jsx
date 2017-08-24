'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class About extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '关于',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              style={{ minHeight: g.bodyMinHeight }}
            >
                <div className="about-version">
                    <div>FAKOA</div>
                    <div>Version: 0.0.1</div>
                </div>
                <ul className="about-list">
                    <li>
                        条款
                    </li>
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default About;
