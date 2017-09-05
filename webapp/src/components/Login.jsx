'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let g,
    _this,
    $submit;

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
        this.username.addEventListener('input', this.changeHandler, true);
        this.password.addEventListener('input', this.changeHandler, true);
        $submit = $(_this.submit);
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('login');
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
        case 'submit':
            alert('ok');
            break;
        default:
            break;
        }
    }
    isNotEmpty() {
        return _this.username.value !== '' && _this.password.value !== '';
    }
    changeHandler() {
        if(_this.isNotEmpty()) {
            $submit.removeClass('btn-disabled');
            $submit.removeAttr('disabled');
        }
        else {
            $submit.addClass('btn-disabled');
            $submit.attr('disabled', true);
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
                        <input
                          ref={(c) => {
                              this.username = c;
                          }}
                          type="text"
                          placeholder="邮箱地址"
                        />
                    </li>
                    <li className="password bdr-b">
                        <input
                          ref={(c) => {
                              this.password = c;
                          }}
                          type="password"
                          placeholder="密码"
                        />
                        <div className="find-pwd" data-tag="find">找回密码</div>
                    </li>
                    <li className="pd-t">
                        <input
                          ref={(c) => {
                              this.submit = c;
                          }}
                          type="button"
                          className="func-btn btn-disabled"
                          disabled="disabled"
                          defaultValue="登陆"
                          data-tag="submit"
                        />
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
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Login;
