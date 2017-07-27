'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CardList from '../components/CardList';
import * as HomeActions from '../actions/home';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const homeAction = bindActionCreators(HomeActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch);
    return {
        headerAction,
        footerAction,
        homeAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CardList);
