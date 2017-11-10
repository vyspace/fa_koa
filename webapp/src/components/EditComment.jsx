'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restore } from '../store/persistence';

let g;

class EditComment extends Component {
    componentWillMount() {
        this.init();
        const { history, store } = this.props;
        restore(store);
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '编辑留言',
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
                  placeholder="写留言..."
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
