'use strict';

export const UPDATE = 'UPDATE';

function uHeader(payload) {
    return {
        type: UPDATE,
        payload
    };
}

export function updateHeader(payload) {
    return (dispatch) => {
        dispatch(uHeader(payload));
    };
}

