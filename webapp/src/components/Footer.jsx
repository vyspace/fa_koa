'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        const { footer } = this.props.store;
        let html;
        switch(footer.type) {
        case 'create':
            html = <ul className="footer"><li className="f-item">图片</li><li className="f-item">表情</li></ul>;
            break;
        case 'home':
        default:
            html = (<ul className="footer">
                <li className="f-item active">主页</li>
                <li className="f-item">创建</li>
                <li className="f-item">搜索</li>
                <li className="f-item">我的</li></ul>);
            break;
        }
        return (<div
          ref={(c) => {
              this.footer = c;
          }}
        >
            {html}
        </div>);
    }
}

Footer.propTypes = {
    store: PropTypes.object.isRequired
};

export default Footer;
