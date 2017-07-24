'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardHead from './CardHead';
import SpeedDial from '../SpeedDial';
import CardAction from './CardAction';
import CardText from './CardText';

class Card extends Component {
    render() {
        const { data, cssStyle, index } = this.props;
        return (
            <ul className="card-item" style={cssStyle} data-index={index}>
                <CardHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
                <li>
                  <SpeedDial photos={data.photos} />
                </li>
                <CardText text={data.text} />
                <CardAction numOfLikes={data.numOfLikes} numOfComments={data.numOfComments} numOfForwards={data.numOfForwards} />
            </ul>
        );
    }
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    cssStyle: PropTypes.object.isRequired,
    index: PropTypes.number.isRequired
};

export default Card;
