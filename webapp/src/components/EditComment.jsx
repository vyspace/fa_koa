'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restore } from '../store/persistence';

let createDiv = null,
    tip = '写评论…';
const tb = 44;

class EditComment extends Component {
    componentWillMount() {
        const { store, history } = this.props,
            action = this.props.store.record.original;
        restore(store);
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { type, nickname } = this.props.store[action].params;
        let tit = '评论';
        tip = '写评论…';
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
        updateFooter({
            type: 'none'
        });
    }
    componentDidMount() {
        this.create.addEventListener('click', this.focusTex.bind(this), false);
        createDiv = this.create;
        window.addEventListener('resize', this.reSize, false);
    }
    componentWillUnmount() {
        window.removeEventListener('resize', this.reSize, false);
    }
    focusTex(e) {
        e.stopPropagation();
        this.text.focus();
    }
    reSize() {
        const cHeight = window.innerHeight - tb;
        if(createDiv) {
            createDiv.style.height = `${cHeight}px`;
        }
    }
    send() {
        const { history } = this.props;
        history.goBack(0);
    }
    render() {
        const cHeight = window.innerHeight - tb;
        return (
            <div
              ref={(c) => {
                  this.create = c;
              }}
              className="edit-comment"
              style={{ height: `${cHeight}px` }}
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
    history: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default EditComment;
