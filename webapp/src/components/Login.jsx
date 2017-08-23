'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Login extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '登陆',
            isBack: true,
            tHistory: history,
            rBtn: {
                type: 'txt',
                content: '注册',
                handler: () => {
                    history.push('register');
                }
            }
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
                        <input type="text" placeholder="用户名/手机号" />
                    </li>
                    <li className="password bdr-b">
                        <input type="password" placeholder="密码" />
                        <div className="find-pwd">找回密码</div>
                    </li>
                    <li>
                        <input type="button" className="func-btn" defaultValue="登陆" />
                    </li>
                </ul>
                <ul className="login-other">
                    <li>微博</li>
                    <li>微信</li>
                    <li>百度</li>
                </ul>
            </div>
        );
    }
}

Login.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Login;
