'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';

class CardHead extends Component {
    render() {
        const {text} = this.props;
        return (
            <li className="ml-of">{text}</li>
        );
    }
}

CardHead.PropTypes = {
    text: PropTypes.string.isRequired
};

export default CardHead;