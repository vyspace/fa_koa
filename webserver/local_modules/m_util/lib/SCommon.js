'use strict';

const Fs = require('./SResource');

class Common {
    static strToJson(str) {
        if(str === '') {
            return str;
        }
        return JSON.parse(str);
    }
    static async getConfigItem(file, name) {
        const str = await (Fs.readFile(file)),
            obj = Common.strToJson(str);
        return obj[name];
    }
}

module.exports = Common;
