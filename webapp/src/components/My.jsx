'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pageRedirect } from '../utils/tools';
import PhotoBrowser from './PhotoBrowser';
import { delUser } from '../store/persistence';

let g,
    _this;

class My extends Component {
    componentWillMount() {
        const { history, store } = this.props,
            { getMyInfo } = this.props.myAction;
        if(pageRedirect(store.record, history)) {
            return;
        }
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '我的',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'base', action: 'my', tHistory: history });
        this.init();
        getMyInfo(g.username);
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('my');
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
        let arr = null;
        switch(tag) {
            case 'myProfile':
                arr = [{
                    el: e.target,
                    msrc: './img/avator.jpg',
                    src: './img/avator.jpg',
                    w: 200,
                    h: 200
                }];
                PhotoBrowser.init(arr, 0);
                break;
            case 'myInfo':
                history.push('userinfo');
                break;
            case 'myHome':
                history.push('myhome');
                break;
            case 'myPhotoAlbum':
                history.push('photoalbum');
                break;
            case 'myFollow':
                history.push('follow');
                break;
            case 'myAdmin':
                history.push('admin');
                break;
            case 'myFeedback':
                history.push('feedback');
                break;
            case 'myAbout':
                history.push('about');
                break;
            case 'myLogout':
                delUser();
                history.push('/');
                break;
            default:
                break;
        }
    }
    render() {
        const { isFetching, data } = this.props.store.my;
        let html;
        if (isFetching) {
            html = 'loadding';
        }
        else {
            let imgUrl = data.profile;
            if(!data.profile) {
                imgUrl = './img/avator.jpg';
            }
            html = (<div>
                <div className="my-head my-mar">
                    <div className="left">
                        <div className="via"><img src={imgUrl} alt="" data-tag="myProfile" /></div>
                    </div>
                    <div className="right" data-tag="myInfo">
                        <div className="first" data-tag="myInfo">
                            <span data-tag="myInfo">{data.nickname}</span>
                            <div className="icon icon-level level">{data.level}</div>
                        </div>
                        <div className="second" data-tag="myInfo">{data.signature}</div>
                    </div>
                </div>
                <ul className="my-list my-mar">
                    <li className="bd-b" data-tag="myHome">
                        <i className="icon icon-myhome" data-tag="myHome" />
                        主页</li>
                    <li className="bd-b" data-tag="myPhotoAlbum">
                        <i className="icon icon-camera" data-tag="myPhotoAlbum" />
                        相册</li>
                    <li data-tag="myFollow">
                        <i className="icon icon-follow" data-tag="myFollow" />
                        关注</li>
                </ul>
                <ul className="my-list my-mar">
                    <li className="bd-b" data-tag="myAdmin">
                        <i className="icon icon-admin" data-tag="myAdmin" />
                        账户管理</li>
                    <li className="bd-b" data-tag="myFeedback">
                        <i className="icon icon-feedback" data-tag="myFeedback" />
                        意见反馈</li>
                    <li data-tag="myAbout">
                        <i className="icon icon-about" data-tag="myAbout" />
                        关于</li>
                </ul>
                <div className="my-btn" data-tag="myLogout">退出</div>
            </div>);
        }
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
            >{html}</div>
        );
    }
}

My.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    myAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default My;
