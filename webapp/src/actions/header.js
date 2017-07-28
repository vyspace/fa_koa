'use strict';

export const HEADER_UPDATE = 'HEADER_UPDATE';

function uHeader(payload) {
    return {
        type: HEADER_UPDATE,
        payload
    };
}

export function updateHeader(payload) {
    return (dispatch) => {
        dispatch(uHeader(payload));
    };
}

