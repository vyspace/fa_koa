'use strict';

class Tools {
	static traverse(path, mime) {
		let files = fs.readdirSync(path),
			fileList = {};
		for(let [i, item] of files.entries()) {
			let itemArr = item.split('\.'),
				itemMime = (itemArr.length >1) ? itemArr[itemArr.length - 1]: undefined,
				keyName = item + '';
			if(mime === itemMime) {
				fileList[item] = path + item;
			}
		}
		return fileList;
	}

	static getSqlMap() {
		let basePath = __dirname,
			pathArr = [],
			fileList = [];
		basePath = basePath.replace(/\\/g, '\/');
		pathArr = baseParh.split('\/');
		pathArr = pathArr.splice(0, pathArr.length - 1);
		basePath = pathArr.join('/') + '/sql/';

		fileList = Tools.traverse(basePath, 'sql');
		return fileList; 
	}
	static getSqlContent() {
		let sqlCntMap = {},
			sqlMap = Tools.getSqlMap();
		for(let key in sqlMap) {
			sqlCntMap[key] = fs.readFileSync(path, 'binary');
		}
		return sqlCntMap;
	}
}