'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import Tab from './Tab';

const range = 10;
let _this,
    scrollFlag,
    tempTag,
    $tabLis,
    $paContainer;

class Header extends Component {
    componentWillMount() {
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        window.addEventListener('scroll', this.scrollHandler, true);
    }
    componentDidUpdate() {
        const { header } = this.props.store;
        if(header.type === 'photoalbum') {
            $tabLis = $(this.eventLayer).find('.middle').find('li');
            $paContainer = $('#paContainer');
        }
    }
    init() {
        _this = this;
        scrollFlag = true;
        tempTag = '';
        $tabLis = null;
        $paContainer = null;
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch (tag) {
        case 'back':
            _this.backHandler();
            break;
        case 'rbtn':
            _this.rBtnHandler();
            break;
        case 'album':
        case 'profile':
            _this.tabHandler(t, tag);
            break;
        default:
            break;
        }
    }
    backHandler() {
        const { backHandler, tHistory } = this.props.store.header;
        if(backHandler) {
            backHandler();
        }
        tHistory.goBack();
    }
    rBtnHandler() {
        const { rBtn } = this.props.store.header;
        if(rBtn && rBtn.handler) {
            rBtn.handler();
        }
    }
    tabHandler(t, tag) {
        if(tempTag !== tag) {
            tempTag = tag;
            $tabLis.removeClass('active');
            t.addClass('active');
            switch (tag) {
            case 'album':
                if($paContainer) {
                    $paContainer.trigger('pa1');
                }
                break;
            case 'profile':
                if($paContainer) {
                    $paContainer.trigger('pa2');
                }
                break;
            default:
                break;
            }
        }
    }
    scrollHandler(e) {
        e.stopPropagation();
        if(document.body.scrollTop >= range) {
            if(scrollFlag) {
                _this.eventLayer.classList.add('bdb');
                scrollFlag = false;
            }
        }
        else if(!scrollFlag) {
            _this.eventLayer.classList.remove('bdb');
            scrollFlag = true;
        }
    }
    render() {
        const { header, record } = this.props.store;
        let backBtn = <li className="item" />,
            optBtn = <li className="item" />,
            middle,
            tabArr;
        if(header.isBack && record.origin) {
            backBtn = (<li className="item item-left" data-tag="back">
                        <i className="icon-back" data-tag="back" />
                    </li>);
        }
        if(header.rBtn) {
            let cont;
            if(header.rBtn.type === 'txt') {
                cont = header.rBtn.content;
            }
            if(header.rBtn.type === 'icon') {
                const cln = `icon ${header.rBtn.content}`;
                cont = <i className={cln} data-tag="rbtn" />;
            }
            optBtn = (<li className="item item-right" data-tag="rbtn">{cont}</li>);
        }
        switch (header.type) {
        case 'home':
            middle = <li className="middle"><h1 className="shimmer">{header.title}</h1></li>;
            break;
        case 'photoalbum':
            tabArr = [{
                tag: 'album',
                value: '相册'
            }, {
                tag: 'profile',
                value: '头像'
            }];
            middle = (<li className="middle">
                <Tab data={tabArr} />
            </li>);
            break;
        case 'search':
            middle = (<li className="f-item middle search">
                <div className="search-box">
                    <div className="icon-box" />
                    <div className="input-box"><input type="text" placeholder="请输入..." /></div>
                    <div className="fill" />
                </div>
            </li>);
            break;
        case 'base':
        default:
            middle = <li className="middle">{header.title}</li>;
            break;
        }
        return (
            <div className="header-view">
                <div
                  ref={(c) => {
                      this.eventLayer = c;
                  }}
                  className="header-container"
                >
                    <ul className="header">
                        {backBtn}
                        {middle}
                        {optBtn}
                    </ul>
                    <div className="toast" style={{ display: 'none' }}><div className="cont">这是一条提示信息！</div></div>
                </div>

            </div>
        );
    }
}

Header.propTypes = {
    store: PropTypes.object.isRequired
};

export default Header;
