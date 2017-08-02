'use strict';

export const RECORD_ORIGINAL = 'RECORD_ORIGINAL';

export function recordOriginal(payload) {
    return {
        type: RECORD_ORIGINAL,
        payload
    };
}

