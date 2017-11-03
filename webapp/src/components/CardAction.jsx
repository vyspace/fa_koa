'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { postLikeData } from '../utils/api';
import { dieTausendstel } from '../utils/tools';

let g;

class CardAction extends Component {
    componentWillMount() {
        this.init();
    }
    componentDidMount() {
        this.eventLayer.addEventListener('click', this.eventHandler, true);
    }
    init() {
        g = window.FaKoa;
    }
    eventHandler(e) {
        e.stopPropagation();
        const t = $(e.target),
            tag = t.data('tag');
        let parent = null;
        switch (tag) {
            case 'share':

                alert('转发中');
                break;
            case 'like':
                if(!g.uid) {
                    return;
                }
                if(t[0].tagName !== 'DIV') {
                    parent = t.parent();
                }
                else {
                    parent = t;
                }
                if(!parent.hasClass('active')) {
                    const params = {
                        uid: g.uid,
                        bid: parent.data('bid')
                    };
                    postLikeData(params, (json) => {
                        if(json.code !== 200) {
                            $toast.trigger('show', json.msg);
                        }
                        else {
                            parent.addClass('active');
                            const likeVal = Number(parent.find('span').data('val'));
                            parent.find('span').html(dieTausendstel(likeVal + 1));
                        }
                    }, (err) => {
                        console.error(err);
                    });
                }
                break;
            default:
                break;
        }
    }
    render() {
        const { blogId, isLike, numOfLikes, numOfComments, numOfForwards, commentOps } = this.props;
        let comment = [<i className="icon icon-comment" key="ca0" data-tag="comment" />, <span key="ca1" className="mar-l" data-tag="comment">{dieTausendstel(numOfComments)}</span>],
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
                    <span className="mar-l" data-tag="share">{dieTausendstel(numOfForwards)}</span>
                </div>
                <div className="center" data-tag="comment">
                    {comment}
                </div>
                <div className={likeClass} data-tag="like" data-bid={blogId}>
                    <i className="icon icon-like" data-tag="like" />
                    <span className="mar-l" data-tag="like" data-val={numOfLikes}>{dieTausendstel(numOfLikes)}</span>
                </div>
            </div>
        );
    }
}

CardAction.propTypes = {
    blogId: PropTypes.number.isRequired,
    numOfLikes: PropTypes.number.isRequired,
    numOfComments: PropTypes.number.isRequired,
    numOfForwards: PropTypes.number.isRequired,
    commentOps: PropTypes.string.isRequired,
    isLike: PropTypes.bool
};

CardAction.defaultProps = {
    isLike: false
};

export default CardAction;
