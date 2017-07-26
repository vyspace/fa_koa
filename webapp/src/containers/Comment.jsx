'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import * as CommentActions from '../actions/comment';
import * as HeaderActions from '../actions/header';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const commentAction = bindActionCreators(CommentActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch);
    return {
        headerAction,
        commentAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
