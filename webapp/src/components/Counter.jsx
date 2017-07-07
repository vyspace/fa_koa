'use strict';

import React, {Component, PropTypes} from 'react';

class Counter extends Component {
    render() {
        const {counter, increment, incrementAsync} = this.props;
        return (
            <p>
                clicked: {counter} times{'  '}
                <input type="button" value="+" onClick={increment}/>{'  '}
                <input type="button" value="+~" onClick={() => incrementAsync()}/>
            </p>
        );
    }
}

Counter.propTypes = {
    increment: PropTypes.func.isRequired,
    counter: PropTypes.number.isRequired,
    incrementAsync: PropTypes.func.isRequired
}

export default Counter;