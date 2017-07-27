'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Footer from '../components/Footer';
import * as FooterActions from '../actions/footer';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(FooterActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
