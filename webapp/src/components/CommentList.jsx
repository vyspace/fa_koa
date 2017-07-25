'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card/Card';
import Comment from './Comment/Comment';

class CommentList extends Component {
    componentWillMount() {
        const { getCommentData } = this.props;
        getCommentData();
    }
    componentDidUpdate() {
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
        const { home, state } = this.props,
            tData = home.data[home.params.rows];
        let css = { marginBottom: 0 },
            vDom = null;
        if(state.isFetching) {
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
                    state.data.map((cell, index) => (<Comment
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
    getCommentData: PropTypes.func.isRequired,
    home: PropTypes.object.isRequired,
    state: PropTypes.object.isRequired
};

export default CommentList;
