'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import ReplyCard from './ReplyCard';

class Reply extends Component {
    componentWillMount() {
        const { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getReplyData } = this.props.replyAction;
        updateHeader({
            type: 'base',
            title: '评论回复',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'base', action: 'reply' });
        getReplyData(1);
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentWillUnmount() {
        const { saveScrollTop } = this.props.replyAction,
            { recordOriginal } = this.props.recordAction;
        saveScrollTop(document.body.scrollTop);
        recordOriginal('reply');
    }
    eventHandler(e) {
        const { history } = this.props,
            { saveParams } = this.props.replyAction;
        e.stopPropagation();
        const t = $(e.target);
        if(e.target.className === 'cp-right' || t.parents('.cp-right').length > 0) {
            let el = t;
            if(e.target.className !== 'cp-right') {
                el = t.parents('.cp-right');
            }
            const params = {
                type: 'reply',
                userId: el.data('uid'),
                workId: el.data('fid'),
                nickname: el.data('nickname')
            };
            saveParams(params);
            history.push('/editcomment');
        }
    }
    render() {
        const { isFetching, data } = this.props.store.reply;
        let html,
            newFlag = true,
            keyIndex = '';
        if(isFetching) {
            html = 'loading';
        }
        else {
            html = data.map((cell, index) => {
                if(index === 0) {
                    newFlag = true;
                }
                else {
                    newFlag = false;
                }
                keyIndex = `rp${index}`;
                return <ReplyCard key={keyIndex} isNew={newFlag} data={cell} />;
            });
        }
        return (<div ref={(c) => {
            this.eventLayer = c;
        }}
        >{html}</div>);
    }
}

Reply.propTypes = {
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    replyAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Reply;
