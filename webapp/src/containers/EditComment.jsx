'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditComment from '../components/EditComment';
import * as EditActions from '../actions/editcomment';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const editActions = bindActionCreators(EditActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch);
    return {
        headerAction,
        footerAction,
        editActions
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditComment);
