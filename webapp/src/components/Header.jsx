'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import EventEmitter from '../utils/event';

const range = 10;
let flag = true;

class Header extends Component {
    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            e.stopPropagation();
            if(document.body.scrollTop >= range) {
                if(flag) {
                    this.header.classList.add('bb');
                    flag = false;
                }
            }
            else if(!flag) {
                this.header.classList.remove('bb');
                flag = true;
            }
        }, false);
    }
    componentDidUpdate() {
        // EventEmitter.publish('HEADER_UPDATE');
    }
    render() {
        const { header } = this.props.store;
        let backBtn = null;
        if(header.isBack) {
            backBtn = <i className="icon-back" />;
        }
        return (
            <div className="header-view">
                <ul
                  className="header"
                  ref={(c) => {
                      this.header = c;
                  }}
                >
                    <li className="item left">
                        {backBtn}
                    </li>
                    <li className="f-item middle">{header.title}</li>
                    <li className="item right" />
                </ul>
            </div>
        );
    }
}

Header.propTypes = {
    store: PropTypes.object.isRequired
}

export default Header;
