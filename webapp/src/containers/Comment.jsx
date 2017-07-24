'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import CommentList from '../components/CommentList';
import * as CommentActions from '../actions/comment';

function mapStateToProps(state) {
    return {
        state: state.comment
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(CommentActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentList);
