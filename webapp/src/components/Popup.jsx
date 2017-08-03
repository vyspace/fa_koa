'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let g;

class Popup extends Component {
    componentWillMount() {
        g = window.FaKoa;
    }
    componentDidMount() {
        this.layer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        const { popup } = this.props.store;
        if(popup.toggle) {
            setTimeout(() => {
                this.layer.classList.add('pop-show');
                document.body.style.overflow = 'hidden';
            }, 100);
        }
        else {
            document.body.style.overflow = '';
        }
    }
    closePopup(callback) {
        const { toggle } = this.props;
        this.layer.classList.remove('pop-show');
        setTimeout(() => {
            toggle({ toggle: false });
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
        case 'photo':
            break;
        case 'article':
            this.closePopup(() => {
                g.history.push('editarticle');
            });
            break;
        case 'cancel':
            this.closePopup();
            break;
        default:
            break;
        }
    }
    render() {
        const { popup } = this.props.store;
        let css = { display: 'none' };
        if(popup.toggle) {
            css = { display: 'block' };
        }
        return (
            <div
              ref={(c) => {
                  this.layer = c;
              }}
              className="pop-layer"
              id="popupLayer"
              style={css}
            >
                <ul className="">
                    <li data-tag="photo">拍&nbsp;&nbsp;照</li>
                    <li data-tag="album">相&nbsp;&nbsp;册</li>
                    <li data-tag="article">文&nbsp;&nbsp;章</li>
                    <li data-tag="cancel">取&nbsp;&nbsp;消</li>
                </ul>
            </div>
        );
    }
}

Popup.propTypes = {
    store: PropTypes.object.isRequired,
    toggle: PropTypes.func.isRequired
};

export default Popup;
