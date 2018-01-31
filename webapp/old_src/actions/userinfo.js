'use strict';

export const USER_INFO_SAVE = 'USER_INFO_SAVE';

export function saveUserInfo(payload) {
    return {
        type: USER_INFO_SAVE,
        payload
    };
}