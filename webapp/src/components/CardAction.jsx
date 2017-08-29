'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAction extends Component {
    render() {
        const { numOfLikes, numOfComments, numOfForwards, commentOps } = this.props;
        let comment = [<i className="icon icon-comment" key="ca0" data-tag="comment" />, <span key="ca1" className="mar-l" data-tag="comment">{numOfComments}</span>];
        if(commentOps !== '') {
            comment = [<i className="icon icon-edit" key="ca0" data-tag="comment" />, <span key="ca1" className="mar-l" data-tag="comment">{commentOps}</span>];
        }
        return (
            <div className="interaction">
                <div data-tag="share">
                    <i className="icon icon-share" data-tag="share" />
                    <span className="mar-l">{numOfForwards}</span>
                </div>
                <div className="center" data-tag="comment">
                    {comment}
                </div>
                <div className="end" data-tag="like">
                    <i className="icon icon-like" data-tag="like" />
                    <span className="mar-l">{numOfLikes}</span>
                </div>
            </div>
        );
    }
}

CardAction.propTypes = {
    numOfLikes: PropTypes.number.isRequired,
    numOfComments: PropTypes.number.isRequired,
    numOfForwards: PropTypes.number.isRequired,
    commentOps: PropTypes.string.isRequired
};

export default CardAction;
