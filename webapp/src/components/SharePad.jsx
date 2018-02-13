'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let _this;

class SharePad extends Component {
    componentWillMount() {
        _this = this;
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
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
        return (<ul
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="share-pad"
          id="sharePad"
        >
            <li>
                <img src="../img/wx.png" alt="微信" />
            </li>
            <li>
                <img src="../img/wb.png" alt="新浪微博" />
            </li>
            <li />
        </ul>);
    }
}

SharePad.propTypes = {

};

export default SharePad;
