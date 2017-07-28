'use strict';

export const POPUP_TOGGLE = 'POPUP_TOGGLE';

export function toggle(payload) {
    return {
        type: POPUP_TOGGLE,
        payload
    };
}

