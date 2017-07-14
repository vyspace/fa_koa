'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import CardHead from './CardHead'
import SpeedDial from './SpeedDial';
import CardAction from './CardAction';
import CardText from './CardText'

class Card extends Component {
    render() {
        const {data} = this.props;
        return (
            <ul className="card-item">
                <CardHead profile={data.profile} nickname={data.nickname} dateTime={data.dateTime} />
                <li>
                    <SpeedDial photos={data.photos}/>
                </li>
                <CardAction/>
                <CardText text={data.text} />
            </ul>
        );
    }
}

Card.propTypes = {
    data: PropTypes.object.isRequired
}

export default Card;