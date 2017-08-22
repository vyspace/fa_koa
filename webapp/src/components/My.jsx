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
            rBtn: null
        });
        updateFooter({ type: 'base', action: 'my' });
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), true);
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
        case 'myPhotoAlbum':
            history.push('photoalbum');
            break;
        case 'myFollow':
            history.push('follow');
            break;
        case 'myAdmin':
            history.push('admin');
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
              data-tag="aaa"
            >
                <div className="my-head my-mar">
                    <div className="left">
                        <div className="via"><img src="./img/avator.jpg" alt="" data-tag="myProfile" /></div>
                    </div>
                    <div className="right" data-tag="myInfo">
                        <div data-tag="myInfo">nickname</div>
                        <div data-tag="myInfo">设计师</div>
                    </div>
                </div>
                <ul className="my-list my-mar">
                    <li className="bb" data-tag="myHome">主页</li>
                    <li className="bb" data-tag="myPhotoAlbum">相册</li>
                    <li data-tag="myFollow">关注</li>
                </ul>
                <ul className="my-list my-mar">
                    <li className="bb" data-tag="myAdmin">账户管理</li>
                    <li className="bb" data-tag="mySuggest">意见反馈</li>
                    <li data-tag="myAbout">关于</li>
                </ul>
                <div className="my-btn" data-tag="mySignOut">退出</div>
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
