'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Admin from '../components/Admin';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as AdminActions from '../actions/admin';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        adminAction = bindActionCreators(AdminActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        adminAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Admin);