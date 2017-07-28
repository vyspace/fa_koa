'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { getPageParams } from '../store/persistence';

let createDiv = null,
    tip = '写评论…';
const tb = 87;

class CreateComment extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            pageParams = getPageParams();
        let tit = '评论';
        tip = '写评论…';
        if(pageParams.type === 'reply') {
            tit = '回复';
            tip = `回复@${pageParams.nickname}…`;
        }
        updateHeader({
            type: 'base',
            title: tit,
            isBack: true,
            rBtn: {
                type: 'txt',
                content: '发送',
                handler: () => {
                    this.send();
                }
            }
        });
        updateFooter({
            type: 'create'
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
              className="create"
              style={{ height: `${cHeight}px` }}
            >
                <textarea
                  ref={(c) => {
                      this.text = c;
                  }}
                  maxLength="150"
                  placeholder={tip}
                />
                <div className="edit-tip">字数限制：150</div>
            </div>

        );
    }
}

CreateComment.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default CreateComment;
