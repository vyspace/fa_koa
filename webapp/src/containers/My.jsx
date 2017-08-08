'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import My from '../components/My';
import * as MyActions from '../actions/my';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        myAction = bindActionCreators(MyActions, dispatch);
    return {
        headerAction,
        footerAction,
        myAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(My);
