'use strict';

import fetch from 'isomorphic-fetch';

function checkStatus(res) {
    if (res.status >= 200 && res.status < 300) {
        return res;
    }
    else {
        const err = new Error(res.statusText);
        err.response = res;
        throw err;
    }
}

function parseJSON(res) {
    return res.json();
}

export default function request(params, resolve, reject) {
    const defaults = {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Accept: 'application/json'
        },
        url: '',
        body: undefined
    };
    const { url, method, headers, body } = Object.assign({}, defaults, params);
    return fetch(url, {
        method,
        headers,
        body
    }).then(checkStatus)
        .then(parseJSON)
          .then(resolve)
            .catch(reject);
}
