'use strict';

import { getPhotoAlbumData, getProfileAlbumData } from '../utils/api';

export const PHOTO_ALBUM_GET = 'PHOTO_ALBUM_GET';
export const PHOTO_ALBUM_GET_SUCCESS = 'PHOTO_ALBUM_GET_SUCCESS';
export const PHOTO_ALBUM_GET_FAILURE = 'PHOTO_ALBUM_GET_FAILURE';

export const PROFILE_ALBUM_GET = 'PROFILE_ALBUM_GET';
export const PROFILE_ALBUM_GET_SUCCESS = 'PROFILE_ALBUM_GET_SUCCESS';
export const PROFILE_ALBUM_GET_FAILURE = 'PROFILE_ALBUM_GET_FAILURE';

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

export function getPaData(uid) {
    return (dispatch) => {
        dispatch(getPhotoAlbum());
        getPhotoAlbumData(uid, (json) => {
            dispatch(getPhotoAlbumSuccess(json));
        }, (err) => {
            dispatch(getPhotoAlbumFailure(err));
        });
    };
}

function getProfileAlbum() {
    return {
        type: PROFILE_ALBUM_GET
    };
}

function getProfileAlbumSuccess(json) {
    return {
        type: PROFILE_ALBUM_GET_SUCCESS,
        payload: json
    };
}

function getProfileAlbumFailure(err) {
    return {
        type: PROFILE_ALBUM_GET_FAILURE,
        payload: err
    };
}

export function getPrData(uid) {
    return (dispatch) => {
        dispatch(getProfileAlbum());
        getProfileAlbumData(uid, (json) => {
            dispatch(getProfileAlbumSuccess(json));
        }, (err) => {
            dispatch(getProfileAlbumFailure(err));
        });
    };
}