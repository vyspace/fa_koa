'use strict';

import request from './request';

const URL_ROOT = '' || `${location.protocol}//${location.host}`;

export const getHomeList = (resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/home`
    };
    request(params, resolve, reject);
};

export const getCommentList = (resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/comment`
    };
    request(params, resolve, reject);
};

export const getArticleData = (aid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/article`
    };
    request(params, resolve, reject);
};

export const getReplyList = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/replylist`
    };
    request(params, resolve, reject);
};

export const getPhotoAlbumData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/photoalbum`
    };
    request(params, resolve, reject);
};

export const getProfileAlbumData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/profilealbum`
    };
    request(params, resolve, reject);
};

export const getFollowList = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/follow`
    };
    request(params, resolve, reject);
};

export const getShortUrl = (long, resolve, reject) => {
    const params = {
        url: `http://api.t.sina.com.cn/short_url/shorten.json?source=1052239900&url_long=${long}`
    };
    request(params, resolve, reject);
};

export const getMyHomeData = (uid, resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/myhome`
    };
    request(params, resolve, reject);
};

