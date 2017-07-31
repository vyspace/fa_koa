'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import $ from 'zepto';
import SinglePhoto from './SinglePhoto';
import PhotoBrowser from './PhotoBrowser';
import { restore } from '../store/persistence';

class Article extends Component {
    componentWillMount() {
        const { store } = this.props;
        restore(store);
        const { aid } = this.props.store.home.params,
            { getArtData } = this.props.articleAction,
            { updateHeader } = this.props.headerAction,
            { updateFooter } = this.props.footerAction;
        updateHeader({
            type: 'base',
            title: '文章',
            isBack: true,
            rBtn: null
        });
        updateFooter({ type: 'home' });
        getArtData(aid);
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler.bind(this), false);
    }
    componentDidUpdate() {
        document.body.scrollTop = 0;
    }
    eventHandler(e) {
        const { photos } = this.props.store.article.data;
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
        const { isFetching, data } = this.props.store.article;
        const html = [];
        if(isFetching) {
            html.push('loading');
        }
        else {
            let index = 0;
            html.push(<h1 key={data.article.length} className="title">{data.title}</h1>);
            for(let i = 0; i < data.article.length; i += 1) {
                const cell = data.article[i];
                if(cell === '[img]') {
                    html.push(<SinglePhoto key={i} browser photo={data.photos[index].msrc} index={index} />);
                    index += 1;
                }
                else {
                    html.push(<p key={i}>{cell}</p>);
                }
            }
        }
        return (<div
          ref={(c) => {
              this.eventLayer = c;
          }}
          className="article-box"
        >{html}</div>);
    }
}

Article.propTypes = {
    articleAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    footerAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired
};

export default Article;
