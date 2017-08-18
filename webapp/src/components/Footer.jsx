'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

const range = 1,
    activeArr = ['active'];
let flag = true,
    g,
    popupLayer,
    fileUpload,
    editBox;

class Footer extends Component {
    componentWillMount() {
        g = window.FaKoa;
    }
    componentDidMount() {
        const { footer } = this.props.store;
        if(footer.type !== 'none') {
            window.addEventListener('scroll', this.footerScroll.bind(this), false);
            this.footer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }
    componentDidUpdate() {
        const { footer } = this.props.store;
        switch(footer.type) {
        case 'base':
            popupLayer = $('#popupLayer');
            break;
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
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'home':
            this.baseActive(0, '/');
            break;
        case 'create':
            popupLayer.trigger('show', 'create');
            break;
        case 'reply':
            this.baseActive(2, 'reply');
            break;
        case 'my':
            this.baseActive(3, 'my');
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
    baseActive(index, action) {
        if(!activeArr[index]) {
            activeArr.length = 0;
            activeArr[index] = 'active';
            g.history.push(action);
        }
    }
    render() {
        const { footer } = this.props.store;
        let html;
        switch(footer.type) {
        case 'none':
            html = null;
            break;
        case 'editaricle':
            html = (<ul className="footer">
                <li className="item-base">拍照</li>
                <li className="item-base" data-tag="album">相册</li>
                <li className="item-base">表情</li>
                <li className="item-base" data-tag="preview">预览</li>
            </ul>);
            break;
        case 'base':
        default:
            html = (<ul className="footer footer-base">
                <li className={activeArr[0] ? 'active' : ''} data-tag="home">主页</li>
                <li data-tag="create">创建</li>
                <li className={activeArr[2] ? 'active' : ''} data-tag="reply">评论</li>
                <li className={activeArr[3] ? 'active' : ''} data-tag="my">我的</li>
                </ul>);
            break;
        }
        if(html) {
            return (<div
              ref={(c) => {
                  this.footer = c;
              }}
              className="footer-container"
            >
                {html}
            </div>);
        }
        else {
            return <div />;
        }
    }
}

Footer.propTypes = {
    store: PropTypes.object.isRequired
};

export default Footer;
