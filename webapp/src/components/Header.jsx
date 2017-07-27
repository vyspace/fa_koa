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
                this.header.classList.add('bb');
                flag = false;
            }
        }
        else if(!flag) {
            this.header.classList.remove('bb');
            flag = true;
        }
    }
    render() {
        const { header } = this.props.store;
        let backBtn = <li className="item" />,
            optBtn = <li className="item right" />;
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
        return (
            <div className="header-view">
                <ul
                  className="header"
                  ref={(c) => {
                      this.header = c;
                  }}
                >
                    {backBtn}
                    <li className="f-item middle">{header.title}</li>
                    {optBtn}
                </ul>
            </div>
        );
    }
}

Header.propTypes = {
    store: PropTypes.object.isRequired
};

export default Header;
