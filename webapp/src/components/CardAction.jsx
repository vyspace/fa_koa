'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAction extends Component {
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    eventHandler(e) {
        const t = $(e.target),
            tag = t.data('tag');
        let parent = null;
        switch (tag) {
        case 'share':
            e.stopPropagation();
            alert('转发中');
            break;
        case 'like':
            e.stopPropagation();
            if(t[0].tagName !== 'DIV') {
                parent = t.parent();
            }
            else {
                parent = t;
            }
            if(!parent.hasClass('active')) {
                parent.addClass('active');
                const x = Number(parent.find('span').html());
                parent.find('span').html(x + 1);
            }
            break;
        default:
            break;
        }
    }
    render() {
        const { isLike, numOfLikes, numOfComments, numOfForwards, commentOps } = this.props;
        let comment = [<i className="icon icon-comment" key="ca0" data-tag="comment" />, <span key="ca1" className="mar-l" data-tag="comment">{numOfComments}</span>],
            likeClass = 'end';
        if(commentOps !== '') {
            comment = [<i className="icon icon-edit" key="ca0" data-tag="comment" />, <span key="ca1" className="mar-l" data-tag="comment">{commentOps}</span>];
        }
        if(isLike) {
            likeClass = 'end active';
        }
        return (
            <div
              className="interaction"
              ref={(c) => {
                  this.eventLayer = c;
              }}
            >
                <div data-tag="share">
                    <i className="icon icon-share" data-tag="share" />
                    <span className="mar-l" data-tag="share">{numOfForwards}</span>
                </div>
                <div className="center" data-tag="comment">
                    {comment}
                </div>
                <div className={likeClass} data-tag="like">
                    <i className="icon icon-like" data-tag="like" />
                    <span className="mar-l" data-tag="like">{numOfLikes}</span>
                </div>
            </div>
        );
    }
}

CardAction.propTypes = {
    numOfLikes: PropTypes.number.isRequired,
    numOfComments: PropTypes.number.isRequired,
    numOfForwards: PropTypes.number.isRequired,
    commentOps: PropTypes.string.isRequired,
    isLike: PropTypes.bool.isRequired
};

export default CardAction;
