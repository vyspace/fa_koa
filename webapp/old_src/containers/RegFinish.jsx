'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import RegFinish from '../components/RegFinish';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as RegFinishActions from '../actions/regfinish';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        regFinishAction = bindActionCreators(RegFinishActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        regFinishAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(RegFinish);
