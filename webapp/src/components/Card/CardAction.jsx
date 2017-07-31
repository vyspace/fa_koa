'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardAction extends Component {
    render() {
        const { numOfLikes, numOfComments, numOfForwards, commentOps } = this.props;
        let comment = `评论${numOfComments}`;
        if(commentOps !== '') {
            comment = commentOps;
        }
        return (
            <li className="interaction">
                <div data-tag="forward">
                    转发{numOfForwards}
                </div>
                <div className="txt-center" data-tag="comment">
                    {comment}
                </div>
                <div className="txt-right" data-tag="like">
                    喜欢{numOfLikes}
                </div>
            </li>
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
