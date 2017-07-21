'use strict';

import request from './request';

const URL_ROOT = '' || `${location.protocol}//${location.host}`;

export const getHomeList = (resolve, reject) => {
    const params = {
        url: `${URL_ROOT}/testdata/home`
    };
    request(params, resolve, reject);
};

