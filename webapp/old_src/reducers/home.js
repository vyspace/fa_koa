'use strict';

import { HOME_GET_START, HOME_GET_SUCCESS, HOME_GET_FAILURE, HOME_SCROLL_TOP, HOME_PAGE_PARAMS, HOME_UPDATE_SUCCESS, HOME_SAVE_PAGE_INDEX, HOME_SAVE_DATA_TIP, HOME_SAVE_TIP_TEXT } from '../actions/home';

export default function home(state = {
    isFetching: true,
    scrollTop: 0,
    pageIndex: 1,
    dataTip: true,
    tipText: ''
}, action) {
    switch(action.type) {
        case HOME_GET_START:
            state.isFetching = true;
            return state;
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
        case HOME_SAVE_PAGE_INDEX:
            state.pageIndex = action.payload;
            return state;
        case HOME_SAVE_DATA_TIP:
            state.dataTip = action.payload;
            return state;
        case HOME_SAVE_TIP_TEXT:
            state.tipText = action.payload;
            return state;
        default:
            return state;
    }
}
