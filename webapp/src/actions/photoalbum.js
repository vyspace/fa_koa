'use strict';

import { getPhotoAlbumData } from '../utils/api';

export const PHOTO_ALBUM_GET = 'PHOTO_ALBUM_GET';
export const PHOTO_ALBUM_GET_SUCCESS = 'PHOTO_ALBUM_GET_SUCCESS';
export const PHOTO_ALBUM_GET_FAILURE = 'PHOTO_ALBUM_GET_FAILURE';

function getPhotoAlbum() {
    return {
        type: PHOTO_ALBUM_GET
    };
}

function getPhotoAlbumSuccess(json) {
    return {
        type: PHOTO_ALBUM_GET_SUCCESS,
        payload: json
    };
}

function getPhotoAlbumFailure(err) {
    return {
        type: PHOTO_ALBUM_GET_FAILURE,
        payload: err
    };
}

export function getPhotoData(uid) {
    return (dispatch) => {
        dispatch(getPhotoAlbum());
        getPhotoAlbumData(uid, (json) => {
            dispatch(getPhotoAlbumSuccess(json));
        }, (err) => {
            dispatch(getPhotoAlbumFailure(err));
        });
    };
}