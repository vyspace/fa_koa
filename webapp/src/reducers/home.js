'use strict';

import { HOME_GET_SUCCESS, HOME_GET_FAILURE, HOME_SCROLL_TOP, HOME_PAGE_PARAMS, HOME_UPDATE_SUCCESS } from '../actions/home';

export default function home(state = {
    isFetching: true,
    scrollTop: 0
}, action) {
    switch(action.type) {
        case HOME_GET_SUCCESS:
        case HOME_GET_FAILURE:
            return Object.assign({}, state, { isFetching: false }, action.payload);
        case HOME_SCROLL_TOP:
            state.scrollTop = action.payload;
            return state;
        case HOME_PAGE_PARAMS:
            state.pageParams = action.payload;
            return state;
        case HOME_UPDATE_SUCCESS:
            state.data.dataList = state.data.dataList.concat(action.payload.data.dataList);
            return state;
        default:
            return state;
    }
}
