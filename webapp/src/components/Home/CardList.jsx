'use strict';

import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends Component {
    render() {
        const { data } = this.props;
        let css = {};
        return (
            <div>
            {
                data.map((cell, index) => {
                    if(index + 1 >= data.length) {
                        css = { marginBottom: 0 };
                    }
                    return <Card key={cell.id} data={cell} cssStyle={css} />;
                })
            }
            </div>
        );
    }
}

CardList.propTypes = {
    data: PropTypes.array.isRequired
};

export default CardList;
