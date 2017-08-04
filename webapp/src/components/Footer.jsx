'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

const range = 1;
let flag = true,
    g,
    fileUpload,
    editBox;

class Footer extends Component {
    componentWillMount() {
        g = window.FaKoa;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.footerScroll.bind(this), false);
        this.footer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        const { footer } = this.props.store;
        switch(footer.type) {
        case 'editaricle':
            fileUpload = $('#fileUpload');
            editBox = $('#editBox');
            break;
        default:
            break;
        }
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
        case 'album':
            if(fileUpload && fileUpload.length > 0) {
                fileUpload.trigger('click');
            }
            break;
        case 'preview':
            if(editBox && editBox.length > 0) {
                editBox.triggerHandler('savePreviewData');
            }
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
        case 'editaricle':
            html = (<ul className="footer">
                <li className="item-base">拍照</li>
                <li className="item-base" data-tag="album">相册</li>
                <li className="item-base">表情</li>
                <li className="item-base" data-tag="preview">预览</li>
            </ul>);
            break;
        case 'home':
        default:
            html = (<ul className="footer footer-base">
                <li className="active" data-tag="home">主页</li>
                <li data-tag="create">创建</li>
                <li data-tag="search">搜索</li>
                <li data-tag="my">我的</li></ul>);
            break;
        }
        return (<div
          ref={(c) => {
              this.footer = c;
          }}
          className="footer-container"
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
