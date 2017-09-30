'use strict';

import { PHOTO_ALBUM_GET, PHOTO_ALBUM_GET_SUCCESS, PHOTO_ALBUM_GET_FAILURE } from '../actions/photoalbum';

export default function phtotAlbum(state = { isFetching: true, data: [] }, action) {
    switch(action.type) {
        case PHOTO_ALBUM_GET_SUCCESS:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case PHOTO_ALBUM_GET_FAILURE:
            state.isFetching = false;
            return state;
        case PHOTO_ALBUM_GET:
            state.isFetching = true;
            return state;
        default:
            return state;
    }
}
