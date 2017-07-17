'use strict';

import React, { Component } from 'react';
const range = 1;
let flag = true;

class Footer extends Component {
    componentDidMount() {
        window.addEventListener('scroll', (e) => {
            e.stopPropagation();
            if(document.body.scrollTop >= range) {
                if(flag) {
                    this.footer.classList.add('footer-hidden');
                    flag = false;
                }
            }
            else if(!flag) {
                this.footer.classList.remove('footer-hidden');
                flag = true;
            }
        }, false);
    }
    render() {
        return (<ul
          className="footer"
          ref={(c) => {
              this.footer = c;
          }}
        >
            <li className="f-item">1</li>
            <li className="f-item">2</li>
            <li className="f-item">3</li>
            <li className="f-item">4</li>
            <li className="f-item">5</li>
        </ul>);
    }
}


export default Footer;
