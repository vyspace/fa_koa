'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import MyHome from '../components/MyHome';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as HeaderActions from '../actions/header';
import * as MyHomeActions from '../actions/myhome';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        myHomeAction = bindActionCreators(MyHomeActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        myHomeAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(MyHome);
