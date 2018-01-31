'use strict';

import { getPhotoAlbumData } from '../utils/api';

export const PHOTO_ALBUM_GET = 'PHOTO_ALBUM_GET';
export const PHOTO_ALBUM_GET_SUCCESS = 'PHOTO_ALBUM_GET_SUCCESS';
export const PHOTO_ALBUM_GET_FAILURE = 'PHOTO_ALBUM_GET_FAILURE';

function getPhotoAlbumSuccess(json) {
    return {
        type: PHOTO_ALBUM_GET_SUCCESS,
        payload: json
    };
}

function getPhotoAlbumFailure(err) {
    return {
        type: PHOTO_ALBUM_GET_FAILURE,
        payload: {
            statusCode: err.statusCode,
            msg: err.msg,
            data: null
        }
    };
}

export function getPhotoData(uid) {
    return (dispatch) => {
        getPhotoAlbumData(uid, (json) => {
            dispatch(getPhotoAlbumSuccess(json));
        }, (err) => {
            dispatch(getPhotoAlbumFailure(err));
        });
    };
}