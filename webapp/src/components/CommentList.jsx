'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import PhotoBrowser from './PhotoBrowser';
import Comment from './Comment/Comment';
import { restore } from '../store/persistence';

class CommentList extends Component {
    componentWillMount() {
        const { store } = this.props,
            { getCommentData } = this.props.commentAction,
            { updateHeader } = this.props.headerAction;
        restore(store);
        updateHeader({ title: 'List', isBack: true });
        getCommentData();
    }
    componentDidUpdate() {
        const { history } = this.props;
        const { home } = this.props.store,
            cardItme = document.getElementsByClassName('card-item')[0];
        cardItme.addEventListener('click', (e) => {
            const t = $(e.target);
            if(e.target.tagName === 'IMG' && t.data('tag') === 'thumbnail') {
                e.stopPropagation();
                const ul = t.parents('.card-item'),
                    rows = ul.data('index'),
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
            if(e.target.tagName === 'DIV' && t.data('tag') === 'comment') {
                e.stopPropagation();
                history.push('/editcomment');
            }
        }, false);
        this.showList();
    }
    cardMove(t) {
        setTimeout(() => {
            t.style.transform = 'translate3d(0, 0, 0)';
        }, 16);
    }
    showList() {
        setTimeout(() => {
            this.commentList.style.display = 'block';
        }, 100);
    }
    render() {
        const { home, comment } = this.props.store,
            tData = home.data[home.params.rows];
        let css = { marginBottom: 0 },
            vDom = null;
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
                    comment.data.map((cell, index) => (<Comment
                      key={cell.id}
                      data={cell}
                      index={index}
                    />))
                }
            </div>);
        }
        if(home.params.cTop !== 0) {
            css = Object.assign(css, { transitionDuration: '.1s', transitionTimingFunction: 'ease-in-out', transform: `translate3d(0, ${home.params.cTop}px, 0)` });
        }
        return (<div>
            <Card data={tData} cssStyle={css} index={0} animation={this.cardMove} commentOps={'发表评论'} />
            {vDom}
            </div>);
    }
}

CommentList.propTypes = {
    commentAction: PropTypes.object.isRequired,
    headerAction: PropTypes.object.isRequired,
    store: PropTypes.object.isRequired,
    history: PropTypes.object.isRequired
};

export default CommentList;
