'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import UserInfo from '../components/UserInfo';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as RecordActions from '../actions/record';
import * as UserInfoActions from '../actions/userinfo';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        userInfoAction = bindActionCreators(UserInfoActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        userInfoAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(UserInfo);
