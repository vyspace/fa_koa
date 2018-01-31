'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Home from '../components/Home';
import * as HomeActions from '../actions/home';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as HeaderActions from '../actions/header';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        homeAction = bindActionCreators(HomeActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        homeAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
