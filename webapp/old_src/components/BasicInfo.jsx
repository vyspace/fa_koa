'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class BasicInfo extends Component {
    componentWillMount() {
        const { history } = this.props,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '基本信息',
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
              className="basic-info"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <ul className="user-info basic mar-b">
                    <li>
                        <div className="left">昵称</div>
                        <div className="right box">小当家</div>
                    </li>
                    <li>
                        <div className="left">性别</div>
                        <div className="right box">男</div>
                    </li>
                    <li>
                        <div className="left">所在地</div>
                        <div className="right box">美国</div>
                    </li>
                    <li>
                        <div className="left">生日</div>
                        <div className="right box">2010-01-01</div>
                    </li>
                    <li>
                        <div className="left">个性签名</div>
                        <div className="right box-info">to be or not to be</div>
                    </li>
                </ul>
                <ul className="user-info basic">
                    <li>
                        <div className="left">标签</div>
                        <div className="right box">时尚达人</div>
                    </li>
                    <li>
                        <div className="left">等级</div>
                        <div className="right box">2</div>
                    </li>
                    <li>
                        <div className="left">注册时间</div>
                        <div className="right box">2017-01-01</div>
                    </li>
                </ul>
            </div>
        );
    }
}

BasicInfo.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default BasicInfo;
