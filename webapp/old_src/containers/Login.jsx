'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Login from '../components/Login';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as LoginActions from '../actions/login';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        loginAction = bindActionCreators(LoginActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        loginAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
