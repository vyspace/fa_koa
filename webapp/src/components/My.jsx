'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { pageRedirect } from '../utils/tools';
import { restore } from '../store/persistence';
import PhotoBrowser from './PhotoBrowser';

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
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'base', action: 'my', tHistory: history });
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), true);
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('my');
    }
    eventHandler(e) {
        e.stopPropagation();
        const { history } = this.props;
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'myProfile':
            const arr = [{
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
        default:
            break;
        }
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
            >
                <div className="my-head my-mar">
                    <div className="left">
                        <div className="via"><img src="./img/avator.jpg" alt="" data-tag="myProfile" /></div>
                    </div>
                    <div className="right" data-tag="myInfo">
                        <div className="first" data-tag="myInfo">
                            <span data-tag="myInfo">nickname</span>
                            <div className="icon icon-level level">2</div>
                        </div>
                        <div className="second" data-tag="myInfo">全球最大的中文搜索引擎</div>
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
                <div className="my-btn" data-tag="mySignOut">退出</div>
            </div>
        );
    }
}

My.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default My;
