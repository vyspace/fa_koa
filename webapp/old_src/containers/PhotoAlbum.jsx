'use strict';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import PhotoAlbum from '../components/PhotoAlbum';
import * as HeaderActions from '../actions/header';
import * as FooterActions from '../actions/footer';
import * as RecordActions from '../actions/record';
import * as PAlbumActions from '../actions/photoalbum';

function mapStateToProps(store) {
    return {
        store
    };
}

function mapDispatchToProps(dispatch) {
    const headerAction = bindActionCreators(HeaderActions, dispatch),
        footerAction = bindActionCreators(FooterActions, dispatch),
        recordAction = bindActionCreators(RecordActions, dispatch),
        palbumAction = bindActionCreators(PAlbumActions, dispatch);
    return {
        headerAction,
        footerAction,
        recordAction,
        palbumAction
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(PhotoAlbum);
