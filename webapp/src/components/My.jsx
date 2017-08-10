'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pageRedirect } from '../utils/tools';
import { restore } from '../store/persistence';

class My extends Component {
    componentWillMount() {
        const { history, store } = this.props;
        restore(store);
        if(pageRedirect(store.record, history)) {
            return;
        }
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '我的',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'base' });
    }
    render() {
        return (
            <div>
                <div className="my-head my-mar">
                    <div className="left">
                        <div className="via"><img src="./img/avator.jpg" alt="" /></div>
                    </div>
                    <div className="right">
                        <div>dfadfad</div>
                    </div>
                </div>
                <ul className="my-list my-mar">
                    <li className="bb">主页</li>
                    <li className="bb">相册</li>
                    <li>关注</li>
                </ul>
                <ul className="my-list my-mar">
                    <li className="bb">账户管理</li>
                    <li className="bb">意见反馈</li>
                    <li>关于</li>
                </ul>
                <div className="my-btn">退出</div>
            </div>
        );
    }
}

My.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default My;
