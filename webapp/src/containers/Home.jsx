'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import * as HomeActions from '../actions/home';

function mapStateToProps(store) {
    return {
        state: store.home
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(HomeActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
