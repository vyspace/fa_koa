'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

class Popup extends Component {
    componentDidMount() {
        this.layer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        const { popup } = this.props.store;
        if(popup.toggle) {
            setTimeout(() => {
                this.layer.classList.add('pop-show');
            }, 100);
        }
    }
    eventHandler(e) {
        const { toggle } = this.props;
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
        case 'photo':
            break;
        case 'cancel':
            this.layer.classList.remove('pop-show');
            setTimeout(() => {
                toggle({ toggle: false });
            }, 300);
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

};

export default Popup;
