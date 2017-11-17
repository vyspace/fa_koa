'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { restore } from '../store/persistence';
import { postEditCommentData } from '../utils/api';

let g,
    _this,
    $toast;

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
    componentDidMount() {
        this.initObj();
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('editcomment');
    }
    init() {
        g = window.FaKoa;
        _this = this;
    }
    initObj() {
        $toast = $('#toast');
    }
    send() {
        const { history, store } = this.props,
            cont = $.trim(_this.text.value);
        if(cont === '') {
            $toast.trigger('show', '请填写留言内容！');
            return;
        }
        const params = {
            bid: store.comment.pageParams.blogId,
            uid: g.uid,
            content: cont
        };
        postEditCommentData(params, (json) => {
            if(json.code === 200) {
                history.goBack(0);
            }
            else {
                $toast.trigger('show', '网络问题，请稍后再试！');
            }
        }, () => {
            $toast.trigger('show', '网络问题，请稍后再试！');
        });
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
