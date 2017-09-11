'use strict';

import { postLoginData } from '../utils/api';

// export const LOGIN_POST = 'LOGIN_POST';
// export const LOGIN_POST_SUCCESS = 'LOGIN_POST_SUCCESS';
// export const LOGIN_POST_FAILURE = 'LOGIN_POST_FAILURE';
//
// function postLogin(json) {
//     return {
//         type: LOGIN_POST,
//         payload: json
//     };
// }
//
// function postLoginSuccess(json) {
//     return {
//         type: MY_HOME_GET_SUCCESS,
//         payload: json
//     };
// }
//
// function postLoginFailure(err) {
//     return {
//         type: LOGIN_POST_FAILURE,
//         payload: err
//     };
// }

export function login(obj, success, failure) {
    return () => {
        postLoginData(obj, (json) => {
            success(json);
        }, (err) => {
            failure(err);
        });
    };
}

