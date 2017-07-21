'use strict';

import { getHomeList } from '../utils/api';

export const GET_HOME = 'GET_HOME_SUCCESS';
export const GET_HOME_SUCCESS = 'GET_HOME_SUCCESS';
export const GET_HOME_FAILURE = 'GET_HOME_FAILURE';

export function getHome() {
    return (dispatch) => {
        dispatch({ type: GET_HOME });
        getHomeList((json) => {
            dispatch({
                type: GET_HOME_SUCCESS,
                payload: json
            });
        }, (err) => {
            dispatch({
                type: GET_HOME_FAILURE,
                payload: err
            });
        });
    };
}
