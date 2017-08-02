'use strict';

import createHistory from 'history/createBrowserHistory';

class MyHistory extends createHistory {
    constructor() {
        super();
        this.srcAction = '';
    }
    pushPath(str) {
        super.push(str);
        this.srcAction = str;
    }
}

export default MyHistory;

