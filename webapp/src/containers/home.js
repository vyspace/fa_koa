'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardList from '../components/Home/CardList';
import * as HomeActions from '../actions/home';

function mapStateToProp(state) {
    return {
        data: state.home
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProp, mapDispatchToProps)(CardList);
