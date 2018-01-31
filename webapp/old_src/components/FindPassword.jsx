'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { isMail } from '../utils/tools';

let g,
    _this,
    wait,
    waitTimer,
    $username,
    $submit,
    $toast;

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
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        this.username.addEventListener('input', this.changeHandler, true);
        this.initObj();
    }
    componentWillUnmount() {
        clearTimeout(waitTimer);
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('findpassword');
    }
    init() {
        g = window.FaKoa;
        _this = this;
        wait = 0;
        waitTimer = 0;
    }
    initObj() {
        $username = $(_this.username);
        $submit = $(_this.submit);
        $toast = $('#toast');
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
    isNotEmpty() {
        return _this.username.value !== '';
    }
    changeHandler() {
        if(_this.isNotEmpty()) {
            $submit.removeClass('btn-disabled').removeAttr('disabled');
        }
        else {
            $submit.addClass('btn-disabled').attr('disabled', true);
        }
    }
    clearError() {
        if($username.hasClass('err-t')) {
            $username.removeClass('err-t');
        }
    }
    countdown() {
        if (wait === 0) {
            $submit.val('确定').removeClass('btn-disabled').removeAttr('disabled');
            $username.removeAttr('disabled');
        }
        else {
            wait -= 1;
            $submit.val(`已发送(${wait})`);
            waitTimer = setTimeout(() => {
                clearTimeout(waitTimer);
                _this.countdown();
            }, 1000);
        }
    }
    submitHandler() {
        const username = $username.val();
        _this.clearError();
        if(!isMail(username)) {
            $toast.trigger('show', '请填写正确邮箱地址');
            $username.addClass('err-t');
        }
        else {
            $submit.val('已发送(60)').addClass('btn-disabled').attr('disabled', true);
            $username.attr('disabled', true);
            $toast.trigger('show', '邮件已发送，请查收');
            wait = 60;
            _this.countdown();
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
                    <li className="pd-t">
                        <input
                          ref={(c) => {
                              this.submit = c;
                          }}
                          type="button"
                          className="func-btn btn-disabled"
                          defaultValue="发送"
                          disabled="disabled"
                          data-tag="submit"
                        />
                    </li>
                </ul>
            </div>
        );
    }
}

FindPassword.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default FindPassword;
