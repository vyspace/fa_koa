'use strict';

export const FOOTER_UPDATE = 'FOOTER_UPDATE';

export function updateFooter(payload) {
    return {
        type: FOOTER_UPDATE,
        payload
    };
}

