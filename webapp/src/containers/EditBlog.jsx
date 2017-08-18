'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import EditBlog from '../components/EditBlog';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as EditBlogActions from '../actions/editarticle';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        editBlogAction = bindActionCreators(EditBlogActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        editBlogAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(EditBlog);