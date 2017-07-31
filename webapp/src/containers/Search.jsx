'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import Search from '../components/Search';
import * as FooterActions from '../actions/footer';
import * as HeaderActions from '../actions/header';
import * as SearchActions from '../actions/search';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    return {
        footerAction: bindActionCreators(FooterActions, dispatch),
        headerAction: bindActionCreators(HeaderActions, dispatch),
        searchAction: bindActionCreators(SearchActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(Search);
