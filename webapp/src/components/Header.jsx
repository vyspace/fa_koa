'use strict';

import React, { Component } from 'react';
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
    render() {
        return (
            <div className="header-view">
                <ul
                  className="header"
                  ref={(c) => {
                      this.header = c;
                  }}
                >
                    <li className="item left" />
                    <li className="f-item middle">Header</li>
                    <li className="item right" />
                </ul>
            </div>
        );
    }
}

export default Header;
