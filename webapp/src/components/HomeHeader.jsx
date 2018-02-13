'use strict';

import React, { Component } from 'react';
import $ from 'zepto';

class HomeHeader extends Component {
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    eventHandler(e) {
        e.stopPropagation();
        let t = $(e.target);
        const tag = t.data('tag'),
            homeMask = $('#homeMask');
        switch(tag) {
            case 'nav':
                if(homeMask.length === 0) {
                    return;
                }
                if(e.target.tagName === 'I') {
                    t = t.parent();
                }
                if(t.hasClass('nav-open')) {
                    t.removeClass('nav-open');
                    homeMask.hide();
                }
                else {
                    t.addClass('nav-open');
                    homeMask.show();
                }
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
              className="header-container home-header"
            >
                <img src="../img/logo_1.png" className="logo" alt="logo" title="首页" />
                <div className="header">
                    <div className="left" />
                    <div className="middle fm" id="redd">Home</div>
                    <div className="right fcm" data-tag="nav">
                        <i className="icn-hamburger" data-tag="nav" />
                    </div>
                </div>
            </div>
        );
    }
}

export default HomeHeader;
