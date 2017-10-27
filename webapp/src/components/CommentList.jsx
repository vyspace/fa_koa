'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';
import PhotoBrowser from './PhotoBrowser';
import Comment from './Comment';
import SingleMsg from './SingleMsg';
import { restore } from '../store/persistence';
import { getScrollTop, setScrollTop, getCompHeadUID } from '../utils/tools';

let showTimer,
    tData,
    _this;

class CommentList extends Component {
    componentWillMount() {
        const { history, store } = this.props,
            { getCommentList } = this.props.commentAction,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        restore(store);
        updateHeader({
            type: 'base',
            title: '评论列表',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
        getCommentList();
    }
    componentDidMount() {
        if(this.eventLayer) {
            this.eventLayer.addEventListener('click', this.eventHandler, true);
        }
    }
    componentDidUpdate() {
        const { action } = this.props.history,
            { scrollTop } = this.props.store.comment;
        this.showList();
        setTimeout(() => {
            if(action === 'POP') {
                setScrollTop(scrollTop);
            }
            else {
                setScrollTop(0);
            }
        }, 200);
    }
    componentWillUnmount() {
        const { saveScrollTop } = this.props.commentAction,
            { recordOrigin } = this.props.recordAction;
        clearTimeout(showTimer);
        saveScrollTop(getScrollTop());
        setScrollTop(0);
        recordOrigin('comment');
    }
    init() {
        showTimer = 0;
        tData = null;
        _this = this;
    }
    eventHandler(e) {
        e.stopPropagation();
        const { history } = _this.props,
            { savePageParams } = _this.props.commentAction,
            { home } = _this.props.store,
            t = $(e.target),
            tag = t.data('tag');
        if(tag === 'thumbnail') {
            const ul = t.parents('.card-item'),
                rows = home.pageParams.rows,
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
            savePageParams(params);
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
            savePageParams(params);
            history.push('/editcomment');
        }
        if (tag === 'article') {
            const aid = t.data('aid'),
                cTop = 0;
            const param = {
                aid, cTop
            };
            savePageParams(param);
            history.push('/article');
        }
        if(tag === 'chead' && t.parents('.comment').length <= 0) {
            history.push('myhome', getCompHeadUID(e));
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
        const { history, store } = this.props,
            { data, pageParams } = store.home,
            comment = store.comment;
        if(store.record.original === '') {
            return null;
        }
        if(data && pageParams) {
            tData = data.dataList[pageParams.rows];
        }
        let html = null;
        if(!tData) {
            html = <SingleMsg msg="请从主页进入" link="/" linkText="跳到主页" />;
        }
        else {
            let vDom = null,
                css = { marginBottom: 0 },
                cTop = 0;
            if(comment.isFetching) {
                vDom = 'loading';
            }
            else if(comment.data) {
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
            else {
                vDom = <SingleMsg msg="网络原因，请稍后再试！" />;
            }
            if(history.action === 'PUSH') {
                cTop = pageParams.cTop;
            }
            if(pageParams.cTop !== 0) {
                css = Object.assign(css, { transitionDuration: '.1s', transitionTimingFunction: 'ease-in-out', transform: `translate3d(0, ${cTop}px, 0)` });
            }
            html = (<div>
                <Card data={tData} cssStyle={css} index={0} animation={this.cardMove} commentOps={'评论'} />
                {vDom}
            </div>);
        }
        return (
            <div ref={(c) => {
                this.eventLayer = c;
            }}
            >
                {html}
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
