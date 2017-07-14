'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
    render() {
        const { data } = this.props;
        return (
            <div>
            {
                data.map((cell, index) => <Card key={index} data={cell}/>)
            }
            </div>
        );
    }
}

CardList.propTypes = {
    data: PropTypes.array.isRequired
}

export default CardList;