'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import { levelHandler } from '../utils/tools';

let g,
    _this;

class MyHome extends Component {
    componentWillMount() {
        const { history, location } = this.props,
            { updateHeader } = this.props.headerAction,
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
        this.init();
        getMyHome(location.state);
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
        switch(tag) {
            case 'basicInfo':
                history.push('basicinfo');
                break;
            case 'photoAlbum':
                history.push('photoalbum');
                break;
            default:
                break;
        }
    }
    render() {
        const { isFetching, data } = this.props.store.myhome;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else if(data) {
            const blogList = data.postList.map((cell, index) => <Card key={cell.id} data={cell} index={index} />),
                levelClass = levelHandler(data.info.level);
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
                                    <div className="icon icon-male gender" />
                                    <div className={levelClass}>{data.info.level}</div>
                                </div>
                                <div className="second" data-tag="myInfo">{data.info.sign}</div>
                                <input type="button" className="follow" value="关注" />
                            </div>
                        </div>
                        <ul className="data">
                            <li>
                                <span>{data.info.posts}</span>
                                <div>发布</div>
                            </li>
                            <li>
                                <span>{data.info.followers}</span>
                                <div>粉丝</div>
                            </li>
                            <li>
                                <span>{data.info.following}</span>
                                <div>关注</div>
                            </li>
                        </ul>
                    </div>
                    <ul className="my-list my-mar">
                        <li className="bd-b" data-tag="basicInfo">
                            <i className="icon icon-myinfo" data-tag="basicInfo" />
                            基本信息</li>
                        <li className="bd-b" data-tag="photoAlbum">
                            <i className="icon icon-camera" data-tag="photoAlbum" />
                            相册</li>
                    </ul>
                    {blogList}
                </div>
            );
        }
        else {
            html = '网络原因，请稍后再试！';
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
    location: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    myHomeAction: PropTypes.object.isRequired
};

export default MyHome;
