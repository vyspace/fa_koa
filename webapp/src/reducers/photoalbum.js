'use strict';

import { PHOTO_ALBUM_GET_SUCCESS, PHOTO_ALBUM_GET_FAILURE } from '../actions/photoalbum';

export default function phtotAlbum(state = { isFetching: true, data: [] }, action) {
    switch(action.type) {
        case PHOTO_ALBUM_GET_SUCCESS:
        case PHOTO_ALBUM_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        default:
            return state;
    }
}
