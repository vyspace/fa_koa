'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

let g;

class Feedback extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '意见反馈',
            isBack: true,
            tHistory: history,
            rBtn: {
                type: 'txt',
                content: '发送',
                handler: () => {

                }
            }
        });
        updateFooter({
            type: 'none'
        });
        this.init();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('feedback');
    }
    init() {
        g = window.FaKoa;
    }
    focusTex(e) {
        e.stopPropagation();
        this.text.focus();
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.eventLayer = c;
              }}
              className="edit-box"
              style={{ minHeight: g.bodyMinHeight }}
            >
                <textarea
                  ref={(c) => {
                      this.text = c;
                  }}
                  className="edit-ta"
                  maxLength="150"
                  placeholder="请输入您的建议..."
                />
            </div>

        );
    }
}

Feedback.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Feedback;
