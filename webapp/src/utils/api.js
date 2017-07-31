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

