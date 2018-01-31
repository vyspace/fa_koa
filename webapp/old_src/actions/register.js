'use strict';

import { postRegisterData } from '../utils/api';

export function postRegister(obj, success, failure) {
    return () => {
        postRegisterData(obj, (json) => {
            success(json);
        }, (err) => {
            failure(err);
        });
    };
}

