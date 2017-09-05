'use strict';

export const RECORD_ORIGIN = 'RECORD_ORIGIN';

export function recordOrigin(payload) {
    return {
        type: RECORD_ORIGIN,
        payload
    };
}

