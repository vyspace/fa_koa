'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

const range = 1;

let g,
    _this,
    scrollFlag,
    popupLayer,
    fileUpload,
    editBox;

class Footer extends Component {
    componentWillMount() {
        g = window.FaKoa;
        _this = this;
        scrollFlag = true;
    }
    componentDidMount() {
        window.addEventListener('scroll', this.footerScroll, false);
        this.eventLayer.addEventListener('click', this.eventHandler, false);
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
            if(scrollFlag) {
                _this.footer.classList.add('footer-hidden');
                scrollFlag = false;
            }
        }
        else if(!scrollFlag) {
            _this.footer.classList.remove('footer-hidden');
            scrollFlag = true;
        }
    }
    eventHandler(e) {
        e.stopPropagation();
        const { tHistory } = _this.props.store.footer,
            t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'home':
            tHistory.push('/');
            break;
        case 'create':
            popupLayer.trigger('show', ['create', tHistory]);
            break;
        case 'reply':
            tHistory.push('reply');
            break;
        case 'my':
            tHistory.push('my');
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
        const { footer } = this.props.store,
            activeArr = [];
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
            switch (footer.action) {
            case 'home':
                activeArr[0] = true;
                break;
            case 'reply':
                activeArr[2] = true;
                break;
            case 'my':
                activeArr[3] = true;
                break;
            default:
                break;
            }
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
                  this.eventLayer = c;
              }}
              className="footer-container"
            >
                {html}
            </div>);
        }
        else {
            return (<div ref={(c) => {
                this.eventLayer = c;
            }}
            />);
        }
    }
}

Footer.propTypes = {
    store: PropTypes.object.isRequired
};

export default Footer;
