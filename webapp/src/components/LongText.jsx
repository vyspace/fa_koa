'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let _this = this;

class LongText extends Component {
    componentWillMount() {
        _this = this;
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    eventHandler(e) {
        const { history } = _this.props;
        let t = $(e.target),
            tn = '';
        const tag = t.data('tag');
        switch(tag) {
            case 'like':
                if(t.hasClass('icn-liked')) {
                    return;
                }
                tn = t[0].tagName;
                if(tn === 'DIV') {
                    t = t.children('.icon');
                }
                if(tn === 'SPAN') {
                    t = t.siblings('i');
                }
                t.removeClass('icn-like').addClass('icn-liked');
                break;
            case 'write':
                history.push('writemsg');
                break;
            default:
                break;
        }
    }
    render() {
        const { data } = this.props;
        return (<div
          className="long-text"
          ref={(c) => {
              this.eventLayer = c;
          }}
        >
            <div>this is a long text!!!</div>
            <div className="operate">
                <div className="rfc" data-tag="like">
                    <i className="icon icn-like" data-tag="like" /><span data-tag="like">1234</span>
                </div>
                <div className="middle">阅读: 10000+</div>
                <div className="rfc" data-tag="write">写留言</div>
            </div>
        </div>);
    }
}

LongText.propTypes = {
    data: PropTypes.object.isRequired
};

export default LongText;
