'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class About extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '关于',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        g = window.FaKoa;
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="about"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul>
                    <li>
                        关于
                    </li>
                    <li>
                        0.0.1
                    </li>
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default About;
