'use strict';

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

class CardHead extends Component {
    render() {
        const { numOfLikes, numOfComments, numOfForwards } = this.props;
        return (
            <li className="interaction">
                <div data-tag="forward">
                    转发{numOfForwards}
                </div>
                <div className="txt-center" data-tag="comment">
                    评论{numOfComments}
                </div>
                <div className="txt-right" data-tag="like">
                    喜欢{numOfLikes}
                </div>
            </li>
        );
    }
}

CardHead.propTypes = {
    numOfLikes: PropTypes.number.isRequired,
    numOfComments: PropTypes.number.isRequired,
    numOfForwards: PropTypes.number.isRequired
};

export default CardHead;
