'use strict';

import { postLoginData } from '../utils/api';


export function login(obj, success, failure) {
    return () => {
        postLoginData(obj, (json) => {
            success(json);
        }, (err) => {
            failure(err);
        });
    };
}

