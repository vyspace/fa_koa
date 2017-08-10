'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Reply from '../components/Reply';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as ReplyActions from '../actions/reply';
import * as RecordActions from '../actions/record';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const footerAction = bindActionCreators(FooterActions, dispatch),
        headerAction = bindActionCreators(HeaderActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        replyAction = bindActionCreators(ReplyActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        replyAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Reply);
