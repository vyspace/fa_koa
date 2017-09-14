'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g,
    _this,
    $submit;

class FindPassword extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '信息填写',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        this.nickname.addEventListener('input', this.changeHandler, true);
        this.initObj();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('findpassword');
    }
    init() {
        g = window.FaKoa;
        _this = this;
    }
    initObj() {
        $submit = $(_this.submit);
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
        return _this.nickname.value !== '';
    }
    changeHandler() {
        if(_this.isNotEmpty()) {
            $submit.removeClass('btn-disabled').removeAttr('disabled');
        }
        else {
            $submit.addClass('btn-disabled').attr('disabled', true);
        }
    }
    submitHandler() {
        const { history } = this.props;
        history.push('/');
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
                        <div className="left">昵称</div>
                        <div className="right">
                            <input
                              ref={(c) => {
                                  this.nickname = c;
                              }}
                              type="text"
                              defaultValue=""
                              data-tag="input"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="left">个性签名</div>
                        <div className="right bd-0">
                            <textarea
                              className="edit-area"
                              maxLength="150"
                              placeholder="快来编辑签名，让大家了解你..."
                              data-tag="input"
                            />
                        </div>
                    </li>
                </ul>
                <div className="input-group pd-t2">
                    <input
                      ref={(c) => {
                          this.submit = c;
                      }}
                      type="button"
                      className="func-btn btn-disabled"
                      defaultValue="完成"
                      disabled="disabled"
                      data-tag="submit"
                    />
                </div>
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
