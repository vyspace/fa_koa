'use strict';

import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Card from './Card';
import PhotoBrowser from './PhotoBrowser';
import Comment from './Comment';
import { restore } from '../store/persistence';
import { getScrollTop, setScrollTop, getCompHeadUID } from '../utils/tools';

let g,
    _this,
    fromAction,
    showTimer,
    tData,
    loadDataTip,
    tipText,
    bodyDiffHeight,
    pageIndex,
    cIndex,
    $body,
    $tipLayer,
    $commentList;

class CommentList extends Component {
    componentWillMount() {
        const { history, store } = this.props,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { getCommentList } = this.props.commentAction;
        fromAction = store.record.origin;
        if(!fromAction) {
            restore(store);
        }
        updateHeader({
            type: 'base',
            title: '留言列表',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        this.init();
        const { data, pageParams } = store.home;
        if(data && pageParams) {
            tData = data.dataList[pageParams.rows];
            if(!fromAction || history.action === 'PUSH') {
                const params = {
                    bid: tData.id,
                    idx: pageIndex
                };
                getCommentList(params);
            }
        }
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
        window.addEventListener('scroll', this.scrollHandler, true);
    }
    shouldComponentUpdate(props) {
        const { comment } = props.store;
        if(!comment.isFetching && comment.data) {
            return true;
        }
        else {
            return false;
        }
    }
    componentDidUpdate() {
        this.showList();
        setTimeout(() => {
            setScrollTop(0);
            _this.initObj();
        }, 200);
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        clearTimeout(showTimer);
        window.removeEventListener('scroll', this.scrollHandler, true);
        recordOrigin('comment');
        setScrollTop(0);
    }
    init() {
        g = window.FaKoa;
        showTimer = 0;
        _this = this;
        tData = null;
        loadDataTip = true;
        tipText = '';
        cIndex = 0;
        pageIndex = 1;
    }
    initObj() {
        $body = $(document.body);
        $tipLayer = $(this.tipLayer);
        $commentList = $(this.commentList);
        bodyDiffHeight = this.calcDiffHeight();
    }
    eventHandler(e) {
        const { history } = _this.props,
            { savePageParams } = _this.props.commentAction,
            { home } = _this.props.store,
            t = $(e.target),
            tag = t.data('tag');
        if(!tag || tag !== 'like') {
            e.stopPropagation();
        }
        if(tag === '') {
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
        if (tag === 'article') {
            const aid = t.data('aid'),
                cTop = 0;
            const param = {
                aid, cTop
            };
            savePageParams(param);
            history.push('/article');
        }
        if(tag === 'chead') {
            history.push('myhome', getCompHeadUID(e));
        }
    }
    scrollHandler(e) {
        e.stopPropagation();
        if(loadDataTip && getScrollTop() / bodyDiffHeight >= 0.95) {
            const { data } = _this.props.store.comment;
            loadDataTip = false;
            setTimeout(() => {
                $tipLayer.html('正在加载数据...');
                if(pageIndex <= data.totalPage) {
                    pageIndex += 1;
                }
                const param = {
                    bid: tData.id,
                    idx: pageIndex
                };
                _this.props.commentAction.updateCommentList(param, (json) => {
                    const { dataList } = json.data;
                    if(dataList && dataList.length > 0) {
                        let idx = 0;
                        const html = dataList.map((cell, index) => {
                                idx = cIndex + index + 1;
                                return <Comment key={cell.id} data={cell} index={index} />;
                            }),
                            _div = document.createElement('div');
                        cIndex = idx;
                        ReactDOM.render(<div>{html}</div>, _div, () => {
                            setTimeout(() => {
                                $tipLayer.html('');
                                $commentList.append($(_div.firstChild).children());
                                bodyDiffHeight = _this.calcDiffHeight();
                                loadDataTip = true;
                            }, 500);
                        });
                    }
                    else {
                        $tipLayer.html('数据已全部加载');
                    }
                }, () => {
                    $tipLayer.html('数据出错，请刷新页面 !');
                });
            }, 1000);
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
    calcDiffHeight() {
        return $body.get(0).scrollHeight - $body.height();
    }
    render() {
        const { isFetching, data } = this.props.store.comment,
            { history, store } = this.props,
            { pageParams } = store.home;
        let html = '';
        if(isFetching) {
            html = 'loadding';
        }
        else {
            let vDom,
                css,
                cTop;
            if(data.dataList && data.dataList.length > 0) {
                css = { marginBottom: 0 };
                cTop = 0;
                vDom = (<div
                  ref={(c) => {
                      this.commentList = c;
                  }}
                  className="comment-list"
                  style={{ display: 'none' }}
                >
                    <div className="comment-tip">精选留言</div>
                    {
                        data.dataList.map((cell, index) => {
                            cIndex = index;
                            return <Comment key={cell.id} data={cell} index={index} />;
                        })
                    }
                </div>);
                if(history.action === 'PUSH') {
                    cTop = pageParams.cTop;
                }
                if(pageParams.cTop !== 0) {
                    css = Object.assign(css, { transitionDuration: '.1s', transitionTimingFunction: 'ease-in-out', transform: `translate3d(0, ${cTop}px, 0)` });
                }
            }
            else {
                vDom = '';
                loadDataTip = false;
            }
            html = (<div>
                <Card data={tData} cssStyle={css} index={0} animation={this.cardMove} commentOps={'留言'} />
                {vDom}
                <div
                  ref={(c) => {
                      this.tipLayer = c;
                  }}
                  key="tip"
                  className="pager-tip"
                >{tipText}</div>
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
