'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class FindPassword extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '找回密码',
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
              className="login"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul className="input-group login-can">
                    <li className="bdr-b">
                        <input type="text" placeholder="邮箱地址" />
                    </li>
                    <li className="pd-t">
                        <input type="button" className="func-btn" defaultValue="发送" />
                    </li>
                </ul>
            </div>
        );
    }
}

FindPassword.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default FindPassword;
