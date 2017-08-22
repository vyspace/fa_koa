'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditLink from '../components/EditLink';
import * as EditActions from '../actions/editlink';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const editAction = bindActionCreators(EditActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch);
    return {
        headerAction,
        footerAction,
        editAction,
        recordAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditLink);
