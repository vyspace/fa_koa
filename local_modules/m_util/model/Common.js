'use strict';

class Common {
	static strToJson(str) {
		if(str === '') {
			return;
		}
		return JSON.parse(str);
	}
}

module.exports = Common;