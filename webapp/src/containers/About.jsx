'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import About from '../components/About';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
