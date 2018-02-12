'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';

let _this;

class BaseHeader extends Component {
    componentDidMount() {
        this.init();
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
            case 'back':
                _this.backHandler();
                break;
            case 'opt':
                alert('操作')
                break;
            default:
                break;
        }
    }
    backHandler() {
        const { beforeBack, theHistory } = this.props.data;
        if(beforeBack) {
            beforeBack();
        }
        else {
            theHistory.goBack();
        }
    }
    render() {
        const { data } = this.props;
        let backBtn,
            backTag = '',
            optBtn,
            optTag = '';
        if(data.isBack) {
            backTag = 'back';
            backBtn = <i className="icon-back" data-tag="back" />;
        }
        if(data.rBtn) {
            optTag = 'opt';
            if(data.rBtn.type === 'txt') {
                optBtn = data.rBtn.content;
            }
        }
        else {
            optTag = 'nav';
            optBtn = <i className="icon-hamburger" data-tag="nav" />;
        }
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="header-container base-header"
            >
                <div className="header">
                    <div className="left fcm br-radius" data-tag={backTag}>{backBtn}</div>
                    <div className="middle fm">{data.title}</div>
                    <div className="right fcm" data-tag={optTag}>{optBtn}</div>
                </div>
            </div>
        );
    }
}

BaseHeader.propTypes = {
    data: PropTypes.object.isRequired
};

export default BaseHeader;
