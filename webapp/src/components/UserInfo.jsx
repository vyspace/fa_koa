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
            title: '我的信息',
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
              className="user-info"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul>
                    <li>
                        <input type="text" placeholder="昵称" defaultValue="小当家" />
                    </li>
                    <li>
                        <input type="text" placeholder="性别" defaultValue="" />
                    </li>
                    <li>
                        <input type="text" placeholder="生日" defaultValue="2010-01-01" />
                    </li>
                    <li>
                        <input type="text" placeholder="所在地" defaultValue="美国" />
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
