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
            optBtn;
        if(data.isBack) {
            backTag = 'back';
            backBtn = <i className="icon-back" data-tag="back" />;
        }
        if(data.rBtn) {
            let cont;
            if(data.rBtn.type === 'txt') {
                cont = header.rBtn.content;
            }
            if(data.rBtn.type === 'icon') {
                const cln = `icon ${header.rBtn.content}`;
                cont = <i className={cln} data-tag="rbtn" />;
            }
            optBtn = (<li className="item item-right" data-tag="rbtn">{cont}</li>);
        }
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="home-header-container"
            >
                <div className="header">
                    <div className="left fcm br-radius" data-tag={backTag}>{backBtn}</div>
                    <div className="middle fm">{data.title}</div>
                    <div className="right fcm" data-tag="nav">
                        <i className="icon-hamburger" data-tag="nav" />
                    </div>
                </div>
            </div>
        );
    }
}

BaseHeader.propTypes = {
    data: PropTypes.object.isRequired
};

export default BaseHeader;
