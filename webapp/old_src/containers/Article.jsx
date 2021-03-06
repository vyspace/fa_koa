'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Article from '../components/Article';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as ArticleActions from '../actions/article';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const articleAction = bindActionCreators(ArticleActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        articleAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Article);
