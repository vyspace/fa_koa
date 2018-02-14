'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let _this;

class Popup extends Component {
    componentWillMount() {
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    init() {
        _this = this;
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        switch(tag) {
            case 'wx':
                alert('微信');
                break;
            case 'wb':
                alert('微博');
                break;
            default:
                break;
        }
    }
    render() {
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="popup-mask"
          style={{ height: `${window.innerHeight}px` }}
        >
            zaa
        </div>);
    }
}

Popup.propTypes = {

};

export default Popup;
