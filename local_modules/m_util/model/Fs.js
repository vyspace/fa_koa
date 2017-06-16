
const fs = require('fs');
class Fs {
	static readFile(path='') {
		return new Promise(async (resolve, reject) => {
			if(await (Fs.isExists(path))){
				fs.readFile(path, 'utf-8', (err, data) => {
					if(err) {
						reject(err);
					}
					else {
						resolve(data);
					}
				})
			}
			else {
				reject(new Error('file is not exists'));
			}
		})
		fs.readFile(path)
	}
	static isExists(path='') {
		return new Promise((resolve) => {
			fs.exists(path, (flag) => {
				if(flag) {
					resolve(true);
				}
				else {
					resolve(false);
				}
			});
		});
	}
	static readDir(path='', ext) {
		return new Promise(async (resolve, reject) => {
			if(await (Fs.isExists(path))) {
				fs.readdir(path, (err, files) => {
					if(err) {
						reject(err);
					}
					else {
						if(ext) {
							let arr = files.filter((item) => {
								let reg = new RegExp('.'+ext+'$', 'i');
								return reg.test(item);
							})
							arr = arr.map((item) => {
								return (path+item);
							});
							resolve(arr);
						}
						else {
							resolve(files);
						}
					}
				});
			}
			else {
				reject(new Error('document is not exists'))
			}
		})
	}
}

module.exports = Fs;