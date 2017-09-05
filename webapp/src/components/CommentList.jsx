'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import PhotoBrowser from './PhotoBrowser';
import Comment from './Comment';
import { restore } from '../store/persistence';
import { pageRedirect } from '../utils/tools';

let showTimer = 0;
let tData;

class CommentList extends Component {
    componentWillMount() {
        const { history, store } = this.props;
        restore(store);
        if(pageRedirect(store, history)) {
            return;
        }
        const { getCommentData } = this.props.commentAction,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '评论列表',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        getCommentData();
    }
    componentDidMount() {
        if(this.eventLayer) {
            this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
        }
    }
    componentDidUpdate() {
        const { scrollTop } = this.props.store.comment;
        this.showList();
        setTimeout(() => {
            document.body.scrollTop = scrollTop;
        }, 100);
    }
    componentWillUnmount() {
        const { saveScrollTop } = this.props.commentAction,
            { recordOrigin } = this.props.recordAction;
        clearTimeout(showTimer);
        saveScrollTop(document.body.scrollTop);
        recordOrigin('comment');
    }
    eventHandler(e) {
        e.stopPropagation();
        const { history } = this.props,
            { home } = this.props.store,
            { saveParams } = this.props.commentAction,
            t = $(e.target),
            tag = t.data('tag');
        if(tag === 'thumbnail') {
            const ul = t.parents('.card-item'),
                rows = home.params.rows,
                imgs = ul.find('img'),
                index = t.data('index'),
                photos = home.data[rows].photos,
                photoArr = [];
            for(let i = 0; i < photos.length; i += 1) {
                const cell = Object.assign({}, photos[i]);
                cell.el = imgs[i];
                photoArr.push(cell);
            }
            PhotoBrowser.init(photoArr, index);
        }
        if(tag === 'comment') {
            const params = {
                type: 'comment',
                userId: tData.userId,
                workId: tData.id
            };
            saveParams(params);
            history.push('/editcomment');
        }
        if(e.target.className === 'comment' || t.parents('.comment').length > 0) {
            let el = t;
            if(e.target.className !== 'comment') {
                el = t.parents('.comment');
            }
            const params = {
                type: 'reply',
                userId: el.data('uid'),
                workId: el.data('id'),
                nickname: el.data('nickname')
            };
            saveParams(params);
            history.push('/editcomment');
        }
        if (tag === 'article') {
            const aid = t.data('aid'),
                cTop = 0;
            const param = {
                aid, cTop
            };
            saveParams(param);
            history.push('/article');
        }
    }
    cardMove(t) {
        setTimeout(() => {
            t.style.transform = 'translate3d(0, 0, 0)';
        }, 16);
    }
    showList() {
        showTimer = setTimeout(() => {
            if(this.commentList) {
                this.commentList.style.display = 'block';
            }
        }, 100);
    }
    render() {
        const { history, store } = this.props;
        if(store.record.original === '') {
            return null;
        }
        const home = store.home,
            comment = store.comment;
        tData = home.data[home.params.rows];
        let css = { marginBottom: 0 },
            vDom = null,
            cTop = 0;
        if(comment.isFetching) {
            vDom = <div>loading</div>;
        }
        else {
            vDom = (<div
              ref={(c) => {
                  this.commentList = c;
              }}
              className="comment-list"
              style={{ display: 'none' }}
            >
                {
                    comment.data.map((cell, index) => (<Comment key={cell.id} data={cell} index={index} />))
                }
            </div>);
        }
        if(history.action === 'PUSH') {
            cTop = home.params.cTop;
        }
        if(home.params.cTop !== 0) {
            css = Object.assign(css, { transitionDuration: '.1s', transitionTimingFunction: 'ease-in-out', transform: `translate3d(0, ${cTop}px, 0)` });
        }
        return (
            <div ref={(c) => {
                this.eventLayer = c;
            }}
            >
                <Card data={tData} cssStyle={css} index={0} animation={this.cardMove} commentOps={'评论'} />
                {vDom}
            </div>);
    }
}

CommentList.propTypes = {
    commentAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default CommentList;
