'use strict';

class JsonDataWrap {
    static success(_data) {
        return {
            code: 200,
            msg: 'OK',
            data: _data
        };
    }
    static failure(_msg = 'Error') {
        return {
            code: 500,
            msg: _msg,
            data: null
        };
    }
    static lost() {
        return {
            code: 404,
            msg: '找不到此链接！',
            data: null
        };
    }
}

module.exports = JsonDataWrap;

