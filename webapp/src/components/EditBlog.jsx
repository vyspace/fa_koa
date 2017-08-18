'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class About extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '编辑',
            isBack: true,
            rBtn: {
                type: 'txt',
                content: '发布',
                handler: () => {
                    this.send();
                }
            }
        });
        updateFooter({ type: 'none' });
        this.init();
    }
    init() {
        g = window.FaKoa;
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="edit-blog"
              style={{ minHeight: g.bodyMinHeight }}
            >
                 <textarea
                   ref={(c) => {
                       this.text = c;
                   }}
                   maxLength="150"
                   placeholder="请输入..."
                 />
                <div className="tip">字数限制：150</div>
                <ul className="speed-dial">
                    <li>
                        <div>
                            <span className="icon-add" />
                        </div>
                    </li>
                </ul>
            </div>
        );
    }
}

About.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired
};

export default About;
