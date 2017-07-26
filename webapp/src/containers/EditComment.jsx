'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as EditActions from '../actions/editcomment';
import Create from '../components/Create';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(EditActions, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Create);
