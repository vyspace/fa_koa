'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

const range = 10;
let flag = true,
    g;

class Header extends Component {
    componentWillMount() {
        g = window.FaKoa;
    }
    componentDidMount() {
        this.header.addEventListener('click', this.eventHandler.bind(this), false);
        window.addEventListener('scroll', this.scrollHandler.bind(this), false);
    }
    eventHandler(e) {
        e.stopPropagation();
        let target = e.target,
            t = $(target);
        if(target.tagName === 'I') {
            target = e.target.parentElement;
            t = $(target);
        }
        if (target.tagName === 'LI' && t.data('tag') === 'back') {
            this.back();
        }
        if (target.tagName === 'LI' && t.data('tag') === 'rbtn') {
            this.opt();
        }
    }
    back() {
        const { backHandler } = this.props.store.header;
        if(backHandler) {
            backHandler();
        }
        else {
            g.history.goBack();
        }
    }
    opt() {
        const { rBtn } = this.props.store.header;
        if(rBtn && rBtn.handler) {
            rBtn.handler();
        }
    }
    scrollHandler(e) {
        e.stopPropagation();
        if(document.body.scrollTop >= range) {
            if(flag) {
                this.header.classList.add('bdb');
                flag = false;
            }
        }
        else if(!flag) {
            this.header.classList.remove('bdb');
            flag = true;
        }
    }
    render() {
        const { header } = this.props.store;
        let backBtn = <li className="item" />,
            optBtn = <li className="item" />,
            middle = <li className="middle">{header.title}</li>;
        if(header.isBack) {
            backBtn = (<li className="item left" data-tag="back">
                        <i className="icon-back" data-tag="back" />
                    </li>);
        }
        if(header.rBtn) {
            let cont;
            if(header.rBtn.type === 'txt') {
                cont = header.rBtn.content;
            }
            if(header.rBtn.type === 'img') {
                cont = <img src={header.rBtn.content} alt="" />;
            }
            optBtn = (<li className="item right" data-tag="rbtn">{cont}</li>);
        }
        if(header.type === 'home') {
            middle = <li className="middle"><h1 className="shimmer">{header.title}</h1></li>;
        }
        if(header.type === 'search') {
            middle = (<li className="f-item middle flx">
                <div className="search-box">
                    <div className="icon-box" />
                    <div className="input-box"><input type="text" placeholder="请输入..." /></div>
                    <div className="fill" />
                </div>
            </li>);
        }
        return (
            <div className="header-view">
                <div
                  ref={(c) => {
                      this.header = c;
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
