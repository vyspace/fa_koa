'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import SinglePhoto from './SinglePhoto';
import PhotoBrowser from './PhotoBrowser';
import CardAction from './CardAction';
import Comment from './Comment';
import { restore } from '../store/persistence';

let g,
    action;

class Article extends Component {
    componentWillMount() {
        const { store } = this.props;
        restore(store);
        const oa = store.record.origin,
            { getArtData, getPreviewData } = this.props.articleAction,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction,
            { history } = this.props;
        updateHeader({
            type: 'base',
            title: '文章',
            isBack: true,
            tHistory: history,
            rBtn: null
        });
        updateFooter({ type: 'none' });
        if(action === 'editarticle') {
            getPreviewData();
        }
        else {
            const { aid } = this.props.store[oa].params;
            getArtData(aid);
        }
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        document.body.scrollTop = 0;
    }
    componentWillUnmount() {
        const { recordOrigin } = this.props.recordAction;
        recordOrigin('article');
    }
    getData() {
        let data;
        if(action === 'editarticle') {
            data = this.props.store.editarticle.data;
        }
        else {
            data = this.props.store.article.data;
        }
        return data;
    }
    init() {
        g = window.FaKoa;
        action = '';
    }
    eventHandler(e) {
        const data = this.getData();
        const { photos } = data;
        e.stopPropagation();
        const t = $(e.target);
        if (e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
            const index = t.data('index'),
                photoArr = [],
                imgs = $(this.eventLayer).find('img');
            for (let i = 0; i < photos.length; i += 1) {
                const cell = Object.assign({}, photos[i]);
                cell.el = imgs[i];
                photoArr.push(cell);
            }
            PhotoBrowser.init(photoArr, index);
        }
    }
    render() {
        let html;
        const { isFetching } = this.props.store.article,
            data = this.getData();
        if(isFetching) {
            html = 'loading';
        }
        else {
            let index = 0;
            html = [];
            const article = [];
            article.push(<h1 key={data.article.length} className="title">{data.title}</h1>);
            for(let i = 0; i < data.article.length; i += 1) {
                const cell = data.article[i];
                if(cell === '[img]') {
                    article.push(<SinglePhoto key={i} browser photo={data.photos[index].msrc} index={index} />);
                    index += 1;
                }
                else {
                    article.push(<p key={i}>{cell}</p>);
                }
            }
            const comments = (<div
              ref={(c) => {
                  this.commentList = c;
              }}
              className="comment-list"
              key="a2"
            >
                {
                    data.comments.map((cell, ix) => (<Comment key={cell.id} data={cell} index={ix} />))
                }
            </div>);
            html = (<div>
                <div className="article-box">{article}</div>
                <div className="article-action"><CardAction numOfLikes={1000} numOfComments={1000} numOfForwards={1000} commentOps="评论" isLike={true} />
                </div>
                {comments}
            </div>);
        }
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="article"
          style={{ minHeight: g.bodyMinHeight }}
        >{html}</div>);
    }
}

Article.propTypes = {
    articleAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    recordAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default Article;
