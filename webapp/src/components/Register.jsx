'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMail, isPwd } from '../utils/tools';

let g,
    _this,
    $username,
    $password,
    $submit,
    $toast;

class Register extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '注册',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        this.username.addEventListener('input', this.changeHandler, true);
        this.password.addEventListener('input', this.changeHandler, true);
        this.initObj();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('photoalbum');
    }
    init() {
        g = window.FaKoa;
        _this = this;
    }
    initObj() {
        $username = $(_this.username);
        $password = $(_this.password);
        $submit = $(_this.submit);
        $toast = $('#toast');
    }
    isNotEmpty() {
        return _this.username.value !== '' && _this.password.value !== '';
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch (tag) {
            case 'submit':
                _this.submitHandler();
                break;
            case 'input':
                t.focus();
                break;
            default:
                break;
        }
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
    clearError() {
        if($username.hasClass('err-t')) {
            $username.removeClass('err-t');
        }
        if($password.hasClass('err-t')) {
            $password.removeClass('err-t');
        }
    }
    submitHandler() {
        const { history } = _this.props,
            { postRegister } = _this.props.registerAction,
            username = $.trim($username.val()),
            password = $.trim($password.val());
        _this.clearError();
        if(!isMail(username)) {
            $toast.trigger('show', '请填写正确邮箱地址');
            $username.addClass('err-t');
        }
        else if(!isPwd(password)) {
            $toast.trigger('show', '请填写正确密码(6～20位字母数字组合)');
            $password.addClass('err-t');
        }
        else {
            postRegister({ username, password }, (json) => {
                if(json.code !== 200) {
                    $toast.trigger('show', json.msg);
                }
                else {
                    history.push('/regfinish', username);
                }
            }, (err) => {
                console.log(err);
            });
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
                          placeholder="邮箱"
                          data-tag="input"
                        />
                    </li>
                    <li className="password bdr-b">
                        <input
                          ref={(c) => {
                              this.password = c;
                          }}
                          type="password"
                          placeholder="密码(6～20位字母数字组合)"
                          data-tag="input"
                        />
                    </li>
                    <li className="pd-t">
                        <input
                          ref={(c) => {
                              this.submit = c;
                          }}
                          type="button"
                          className="func-btn btn-disabled"
                          disabled="disabled"
                          defaultValue="注册"
                          data-tag="submit"
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

Register.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    registerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Register;
