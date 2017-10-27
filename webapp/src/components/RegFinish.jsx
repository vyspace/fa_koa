'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { saveUser } from '../store/persistence';

let g,
    _this,
    username,
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
            beforeBack: () => {
                if(confirm('你确定要退出？')) {
                    history.goBack();
                }
            },
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        this.nickname.addEventListener('input', this.changeHandler, true);
        this.gender.addEventListener('change', this.selectHandler, true);
        this.initObj();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('regfinish');
    }
    init() {
        g = window.FaKoa;
        _this = this;
        username = this.props.location.state;
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
    selectHandler(e) {
        e.stopPropagation();
        e.target[e.target.selectedIndex].selected = true;
    }
    submitHandler() {
        const { history } = _this.props,
            { regFinish } = _this.props.regFinishAction,
            nickname = $.trim(_this.nickname.value),
            gender = _this.gender.value,
            signature = _this.signature.value;
        regFinish({ username, nickname, gender, signature }, (json) => {
            if(json.code !== 200) {
                $toast.trigger('show', json.msg);
            }
            else {
                saveUser(json.data);
                history.push('/');
            }
        }, (err) => {
            console.log(err);
        });
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
                        <div className="left">性别</div>
                        <div className="right">
                            <select
                              ref={(c) => {
                                  this.gender = c;
                              }}
                              defaultValue="0"
                            >
                                <option value="0">女</option>
                                <option value="1">男</option>
                            </select>
                        </div>

                    </li>
                    <li>
                        <div className="left">个性签名</div>
                        <div className="right bd-0">
                            <textarea
                              ref={(c) => {
                                  this.signature = c;
                              }}
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
    location: PropTypes.object.isRequired,
    regFinishAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default FindPassword;
