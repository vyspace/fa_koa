'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Follow from '../components/Follow';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as FollowActions from '../actions/follow';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        followAction = bindActionCreators(FollowActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        followAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Follow);
