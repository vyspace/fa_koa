'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restore } from '../store/persistence';

let g,
    tip;

class EditComment extends Component {
    componentWillMount() {
        this.init();
        const { history, store } = this.props;
        restore(store);
        const oAction = store.record.origin,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { type, nickname } = store[oAction].pageParams;
        let tit = '评论';
        if(type === 'reply') {
            tit = '回复';
            tip = `回复@${nickname}…`;
        }
        updateHeader({
            type: 'base',
            title: tit,
            isBack: true,
            tHistory: history,
            rBtn: {
                type: 'txt',
                content: '发送',
                handler: () => {
                    this.send();
                }
            }
        });
        updateFooter({ type: 'none' });
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('editcomment');
    }
    init() {
        g = window.FaKoa;
        tip = '写评论…';
    }
    send() {
        const { history } = this.props;
        history.goBack(0);
    }
    render() {
        return (
            <div
              ref={(c) => {
                  this.create = c;
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
                  placeholder={tip}
                />
                <div className="edit-tip">字数限制：150</div>
            </div>

        );
    }
}

EditComment.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default EditComment;
