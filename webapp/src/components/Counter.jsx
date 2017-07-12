'use strict';

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class Counter extends Component {
    render() {
        const {counter, increment, incrementAsync} = this.props;
        return (
            <div>
                clicked: {counter} times{'  '}
                <input type="button" value="+" onClick={increment}/>{'  '}
                <input type="button" value="+~" onClick={() => incrementAsync()}/>
                <Card />
            </div>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    incrementAsync: PropTypes.func.isRequired
}

export default Counter;