'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import * as HomeActions from '../actions/home';
import * as HeaderActions from '../actions/header';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const homeAction = bindActionCreators(HomeActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch);
    return {
        headerAction,
        homeAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
