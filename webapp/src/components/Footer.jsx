'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

const range = 1;
let flag = true,
    g;

class Footer extends Component {
    componentWillMount() {
        g = window.FaKoa;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.footerScroll.bind(this), false);
        this.footer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    footerScroll(e) {
        e.stopPropagation();
        if(document.body.scrollTop >= range) {
            if(flag) {
                this.footer.classList.add('footer-hidden');
                flag = false;
            }
        }
        else if(!flag) {
            this.footer.classList.remove('footer-hidden');
            flag = true;
        }
    }
    eventHandler(e) {
        const { toggle } = this.props.popupAction;
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'home':
            break;
        case 'create':
            toggle({ toggle: true });
            break;
        case 'search':
            g.history.push('search');
            break;
        default:
            break;
        }
    }
    render() {
        const { footer } = this.props.store;
        let html;
        switch(footer.type) {
        case 'none':
            break;
        case 'create':
            html = <ul className="footer"><li className="f-item">图片</li><li className="f-item">表情</li></ul>;
            break;
        case 'home':
        default:
            html = (<ul className="footer">
                <li className="f-item active" data-tag="home">主页</li>
                <li className="f-item" data-tag="create">创建</li>
                <li className="f-item" data-tag="search">搜索</li>
                <li className="f-item" data-tag="my">我的</li></ul>);
            break;
        }
        return (<div
          ref={(c) => {
              this.footer = c;
          }}
        >
            {html}
        </div>);
    }
}

Footer.propTypes = {
    store: PropTypes.object.isRequired,
    popupAction: PropTypes.object.isRequired
};

export default Footer;
