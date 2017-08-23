'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { imageInsert } from '../utils/tools';

let g,
    _this;

class About extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '个人信息',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        g = window.FaKoa;
        _this = this;
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        this.file.addEventListener('change', this.fileChange, true);
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'profile':
            $('#popupLayer').trigger('show', 'profile');
            break;
        default:
            break;
        }
    }
    fileChange(e) {
        e.stopPropagation();
        const { history, userInfoAction } = _this.props;
        const param = {
            file: e.target.files[0],
            callback(img) {
                userInfoAction.saveUserInfo(img);
                history.push('profile');
            }
        };
        imageInsert(param);
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
                        <div className="left">头像</div>
                        <div className="right profile-box">
                            <img className="profile" src="../img/profile.jpg" alt="" data-tag="profile" />
                            <input
                              ref={(c) => {
                                  this.file = c;
                              }}
                              type="file"
                              className="s-file"
                            />
                        </div>
                    </li>
                    <li>
                        <div className="left">昵称</div>
                        <div className="right">
                            <input type="text" defaultValue="小当家" />
                        </div>
                    </li>
                    <li>
                        <div className="left">性别</div>
                        <div className="right">
                            <select defaultValue="female">
                                <option defaultValue="female">女</option>
                                <option defaultValue="male">男</option>
                            </select>
                        </div>

                    </li>
                    <li>
                        <div className="left">所在地</div>
                        <div className="right">
                            <input type="text" defaultValue="美国" />
                        </div>
                    </li>
                    <li>
                        <div className="left">个性签名</div>
                        <div className="right">
                            <input type="text" defaultValue="to be or not to be" />
                        </div>
                    </li>
                    <li>
                        <div className="left">生日</div>
                        <div className="right box" data-tag="birthday">
                            2010-01-01
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default About;
