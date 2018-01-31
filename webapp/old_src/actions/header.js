'use strict';

export const HEADER_UPDATE = 'HEADER_UPDATE';

export function updateHeader(payload) {
    return {
        type: HEADER_UPDATE,
        payload
    };
}

