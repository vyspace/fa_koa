'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let _this,
    history,
    popType;

class Popup extends Component {
    componentWillMount() {
        _this = this;
        popType = '';
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, false);
        $(this.eventLayer).on('show', this.showPopup);
    }
    showPopup(e, type, tHistory) {
        e.stopPropagation();
        if(popType !== type) {
            popType = type;
            let html = '';
            if(popType === 'create') {
                html = `<ul>
                    <li data-tag="blog">图&nbsp;&nbsp;片</li>
                    <li data-tag="article">文&nbsp;&nbsp;章</li>
                    <li data-tag="link">外&nbsp;&nbsp;链</li>
                    <li data-tag="cancel">取&nbsp;&nbsp;消</li>
                </ul>`;
            }
            if(popType === 'profile') {
                html = `<ul>
                    <li data-tag="photo">拍&nbsp;&nbsp;照</li>
                    <li data-tag="album">相&nbsp;&nbsp;册</li>
                    <li data-tag="cancel">取&nbsp;&nbsp;消</li>
                </ul>`;
            }
            _this.eventLayer.innerHTML = html;
        }
        _this.eventLayer.style.display = 'block';
        document.body.style.overflow = 'hidden';
        history = tHistory;
        setTimeout(() => {
            _this.eventLayer.classList.add('pop-show');
        }, 100);
    }
    closePopup(callback) {
        _this.eventLayer.classList.remove('pop-show');
        setTimeout(() => {
            _this.eventLayer.style.display = 'none';
            document.body.style.overflow = '';
            if(callback) {
                callback();
            }
        }, 300);
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'blog':
            _this.closePopup(() => {
                history.push('editblog');
            });
            break;
        case 'article':
            _this.closePopup(() => {
                history.push('editarticle');
            });
            break;
        case 'link':
            _this.closePopup(() => {
                history.push('editlink');
            });
            break;
        case 'cancel':
            _this.closePopup();
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
              className="pop-layer"
              id="popupLayer"
              style={{ display: 'none' }}
            />
        );
    }
}

Popup.propTypes = {
    type: PropTypes.string.isRequired
};

export default Popup;
