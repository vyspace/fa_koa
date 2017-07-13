'use strict';

import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import Counter from '../components/Counter'
import * as CounterActions from '../actions/counter';

function mapStateToProp(state) {
    return {
        counter: state.counter,
        photos: ['./img/test.jpg','./img/test.jpg','./img/test.jpg','./img/test.jpg','./img/test.jpg','./img/test01.png']
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CounterActions, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProps)(Counter);