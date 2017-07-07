'use strict';

export const INCREMENT = 'INCREMENT';

export function increment() {
    return {
        type: INCREMENT
    }
}

export function incrementAsync(payload=1000) {
    return dispatch => {
        setTimeout(() => {
            dispatch(increment())
        }, payload);
    }
}
