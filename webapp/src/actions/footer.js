'use strict';

export const FOOTER_UPDATE = 'FOOTER_UPDATE';

function uFooter(payload) {
    return {
        type: FOOTER_UPDATE,
        payload
    };
}

export function updateFooter(payload) {
    return (dispatch) => {
        dispatch(uFooter(payload));
    };
}

