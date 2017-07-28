'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import * as FooterActions from '../actions/footer';
import * as PopupActions from '../actions/popup';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        footerAction: bindActionCreators(FooterActions, dispatch),
        popupAction: bindActionCreators(PopupActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
