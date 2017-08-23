'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Admin extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '修改密码',
            isBack: true,
            tHistory: history,
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
              className="admin-box"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul>
                    <li>
                        <input type="password" placeholder="旧密码..." />
                    </li>
                    <li>
                        <input type="password" placeholder="新密码..." />
                    </li>
                    <li>
                        <input type="password" placeholder="确认密码..." />
                    </li>
                    <li>
                        <input className="btn disabled" type="button" value="确定" disabled="disabled" />
                    </li>
                </ul>
            </div>
        );
    }
}

Admin.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Admin;
