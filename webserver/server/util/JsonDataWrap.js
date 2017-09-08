'use strict';

class JsonDataWrap {
    static success(_data) {
        return {
            code: 200,
            msg: 'OK',
            data: _data
        };
    }
    static failure() {
        return {
            code: 404,
            msg: 'ERROR',
            data: null
        };
    }
}

module.exports = JsonDataWrap;

