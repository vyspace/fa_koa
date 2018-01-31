'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditArticle from '../components/EditArticle';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as EditActions from '../actions/editarticle';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        editAction = bindActionCreators(EditActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        editAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditArticle);
