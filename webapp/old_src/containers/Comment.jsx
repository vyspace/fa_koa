'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as CommentActions from '../actions/comment';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        commentAction = bindActionCreators(CommentActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        commentAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
