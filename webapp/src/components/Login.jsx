'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let g,
    _this;

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
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    init() {
        g = window.FaKoa;
        _this = this;
    }
    eventHandler(e) {
        e.stopPropagation();
        const { history } = _this.props,
            t = $(e.target),
            tag = t.data('tag');
        switch (tag) {
        case 'find':
            history.push('findpassword');
            break;
        default:
            break;
        }
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
                    <li className="password bdr-b">
                        <input type="password" placeholder="密码" />
                        <div className="find-pwd" data-tag="find">找回密码</div>
                    </li>
                    <li className="pd-t">
                        <input type="button" className="func-btn btn-disabled" disabled="disabled" defaultValue="登陆" />
                    </li>
                </ul>
                <ul className="login-other">
                    <li><img src="../img/sina.png" alt="" /></li>
                    <li><img src="../img/wechat.png" alt="" /></li>
                    <li><img src="../img/baidu.png" alt="" /></li>
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
