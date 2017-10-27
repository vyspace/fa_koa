'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import { getScrollTop } from '../utils/tools';

let _this,
    startY,
    scrollFlag,
    isShow,
    $eventLayer,
    $popupLayer,
    $fileUpload,
    $editBox;

class Footer extends Component {
    componentWillMount() {
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        window.addEventListener('scroll', this.scrollHandler, true);
        this.initObj();
    }
    componentDidUpdate() {
        const { footer } = this.props.store;
        if(footer.type === 'none') {
            isShow = false;
        }
        else {
            isShow = true;
        }
        switch(footer.type) {
            case 'base':
                $popupLayer = $('#popupLayer');
                break;
            case 'editaricle':
                $fileUpload = $('#fileUpload');
                $editBox = $('#editBox');
                break;
            default:
                break;
        }
    }
    init() {
        _this = this;
        startY = 0;
        scrollFlag = true;
        isShow = true;
    }
    initObj() {
        $eventLayer = $(this.eventLayer);
    }
    scrollHandler(e) {
        e.stopPropagation();
        if(isShow && scrollFlag) {
            startY = getScrollTop();
            scrollFlag = false;
            setTimeout(() => {
                const y = getScrollTop();
                if(y > startY) {
                    if(!$eventLayer.hasClass('footer-hidden')) {
                        $eventLayer.addClass('footer-hidden');
                    }
                }
                else if(y < startY) {
                    if($eventLayer.hasClass('footer-hidden')) {
                        $eventLayer.removeClass('footer-hidden');
                    }
                }
                scrollFlag = true;
            }, 500);
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
                $popupLayer.trigger('show', ['create', tHistory]);
                break;
            case 'reply':
                tHistory.push('reply');
                break;
            case 'my':
                tHistory.push('my');
                break;
            case 'album':
                if($fileUpload && $fileUpload.length > 0) {
                    $fileUpload.trigger('click');
                }
                break;
            case 'preview':
                if($editBox && $editBox.length > 0) {
                    $editBox.triggerHandler('savePreviewData');
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
                <li className={activeArr[0] ? 'active' : ''} data-tag="home">
                    <i className="icon icon-home" data-tag="home" />
                </li>
                <li data-tag="create">
                    <i className="icon icon-create" data-tag="create" />
                </li>
                <li className={activeArr[2] ? 'active' : ''} data-tag="reply">
                    <i className="icon icon-reply" data-tag="reply" />
                </li>
                <li className={activeArr[3] ? 'active' : ''} data-tag="my">
                    <i className="icon icon-my" data-tag="my" />
                </li>
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
