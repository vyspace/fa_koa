'use strict';

import { postRegFinishData } from '../utils/api';

export function regFinish(obj, success, failure) {
    return () => {
        postRegFinishData(obj, (json) => {
            success(json);
        }, (err) => {
            failure(err);
        });
    };
}

