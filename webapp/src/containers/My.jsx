'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import My from '../components/My';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as MyActions from '../actions/my';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        myAction = bindActionCreators(MyActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        myAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
