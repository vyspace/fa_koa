'use strict';

export const SEARCH_UPDATE = 'SEARCH_UPDATE';

export function searchUpdate(payload) {
    return {
        type: SEARCH_UPDATE,
        payload
    };
}
