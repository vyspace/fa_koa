'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Popup from '../components/Popup';
import * as PopupActions from '../actions/popup';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(PopupActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Popup);
