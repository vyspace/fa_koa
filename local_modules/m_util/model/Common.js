'use strict';

const Fs = require('./SResource');

class Common {
	static strToJson(str) {
		if(str === '') {
			return;
		}
		return JSON.parse(str);
	}
	static async getConfigItem(file, name) {
        let str = await (Fs.readFile(file)),
            obj = Common.strToJson(str);
        return obj[name];
	}
}

module.exports = Common;