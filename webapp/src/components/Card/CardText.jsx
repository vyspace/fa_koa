'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardText extends Component {
    render() {
        const { text } = this.props;
        return (
            <li className="article mar-b">{text}</li>
        );
    }
}

CardText.propTypes = {
    text: PropTypes.string.isRequired
};

export default CardText;
