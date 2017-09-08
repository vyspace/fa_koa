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
            'Content-Type': 'text/plain',
            Accept: 'application/json'
        },
        url: '',
        mode: 'cors',
        body: ''
    };
    const { url, method, mode, headers, body } = Object.assign({}, defaults, params);
    return fetch(url, {
        mode,
        method,
        headers,
        body
    }).then(checkStatus)
        .then(parseJSON)
          .then(resolve)
            .catch(reject);
}
