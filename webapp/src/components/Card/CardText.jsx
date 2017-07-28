'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';

class CardHead extends Component {
    render() {
        const { text } = this.props;
        return (
            <li className="article mar-b">{text}</li>
        );
    }
}

CardHead.propTypes = {
    text: PropTypes.string.isRequired
};

export default CardHead;
