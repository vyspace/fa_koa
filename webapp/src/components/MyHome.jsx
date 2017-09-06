'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class MyHome extends Component {
    componentWillMount() {
        const { history } = this.props;
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getMyHome } = this.props.myHomeAction;
        updateHeader({
            type: 'base',
            title: '主页',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        getMyHome();
    }
    render() {
        const { isFetching, data } = this.props.store.myhome;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else {
            const blogList = data.post.map((cell, index) => <Card key={cell.id} data={cell} index={index} />);
            html = (
                <div>
                    <div className="my-home my-mar">
                        <div className="info">
                            <div className="left">
                                <div className="via"><img src="./img/avator.jpg" alt="" data-tag="myProfile" /></div>
                            </div>
                            <div className="right" data-tag="myInfo">
                                <div className="first" data-tag="myInfo">
                                    <span data-tag="myInfo">{data.info.nickname}</span>
                                    <div className="icon icon-level level">2</div>
                                </div>
                                <div className="second" data-tag="myInfo">{data.info.sign}</div>
                                <input type="button" className="follow" value="关注" />
                            </div>
                        </div>
                        <ul className="data">
                            <li>
                                <span>123</span>
                                <div>发布</div>
                            </li>
                            <li>
                                <span>123</span>
                                <div>粉丝</div>
                            </li>
                            <li>
                                <span>123</span>
                                <div>关注</div>
                            </li>
                        </ul>
                    </div>
                    <ul className="my-list my-mar">
                        <li className="bd-b" data-tag="myHome">
                            <i className="icon icon-myinfo" data-tag="myHome" />
                            基本信息</li>
                        <li className="bd-b" data-tag="myPhotoAlbum">
                            <i className="icon icon-camera" data-tag="myPhotoAlbum" />
                            相册</li>
                    </ul>
                    {blogList}
                </div>
            );
        }
        return (
            <div ref={(c) => {
                this.eventLayer = c;
            }}
            >{html}</div>
        );
    }
}

MyHome.propTypes = {
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    myHomeAction: PropTypes.object.isRequired
};

export default MyHome;
