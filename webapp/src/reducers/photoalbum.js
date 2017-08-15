'use strict';

import { PHOTO_ALBUM_GET, PHOTO_ALBUM_GET_SUCCESS, PHOTO_ALBUM_GET_FAILURE, PROFILE_ALBUM_GET, PROFILE_ALBUM_GET_SUCCESS, PROFILE_ALBUM_GET_FAILURE } from '../actions/photoalbum';

export default function phtotAlbum(state = { isFetching: true, data: [] }, action) {
    switch(action.type) {
    case PHOTO_ALBUM_GET_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case PHOTO_ALBUM_GET_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case PHOTO_ALBUM_GET:
        state.isFetching = true;
        return state;
    case PROFILE_ALBUM_GET_SUCCESS:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case PROFILE_ALBUM_GET_FAILURE:
        return Object.assign({}, state, { isFetching: false }, action.payload);
    case PROFILE_ALBUM_GET:
        state.isFetching = true;
        return state;
    default:
        return state;
    }
}
