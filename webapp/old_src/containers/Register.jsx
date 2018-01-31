'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Register from '../components/Register';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as RegisterActions from '../actions/register';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        registerAction = bindActionCreators(RegisterActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        registerAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Register);