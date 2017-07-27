'use strict';

export const UPDATE = 'UPDATE';

function uFooter(payload) {
    return {
        type: UPDATE,
        payload
    };
}

export function updateFooter(payload) {
    return (dispatch) => {
        dispatch(uFooter(payload));
    };
}

