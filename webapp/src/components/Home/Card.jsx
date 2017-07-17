'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import CardHead from './CardHead';
import SpeedDial from './SpeedDial';
import CardAction from './CardAction';
import CardText from './CardText';

class Card extends Component {
    render() {
        const { data, cssStyle } = this.props;
        return (
            <ul className="card-item" style={cssStyle}>
                <CardHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
                <li>
                  <SpeedDial photos={data.photos} />
                </li>
                <CardText text={data.text} />
                <CardAction />
            </ul>
        );
    }
}

Card.propTypes = {
    data: PropTypes.object.isRequired,
    cssStyle: PropTypes.object.isRequired
};

export default Card;
