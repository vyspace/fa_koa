'use strict';

const fs = require('local_modules/m_util/model/SResource');
class SResource {
    constructor() {
        throw new Error('SResource is a static class.');
    }
	/* 文件读取操作
	 * path文件路径
	 * encode 按某种编码读取文件，默认utf-8
	 * 返回字符串
	 */
    static readFile(path='', encode='utf-8') {
        if(path === '') {
            return;
        }
        return new Promise(async (resolve, reject) => {
            if(await (SResource.isExists(path))){
                fs.readFile(path, encode, (err, data) => {
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
        fs.readFile(path);
    }
	/* 判断文件夹或文件是否存在
	 * path 文件，或文件夹路径
	 * 返回boolean值
	 */
    static isExists(path='') {
        if(path === '') {
            return;
        }
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
	/* 读取文件夹下所有内容
	 * path 文件夹路径
	 * etx 指定要读取的文件名后缀
	 * 如果ext未指定，则返回目标文件夹下的文件夹和文件名称数组
	 * 如果ext指定，则返回一组指定文件的路径
	 */
    static readDir(path='', ext) {
        if(path === '') {
            return;
        }
        return new Promise(async (resolve, reject) => {
            if(await (SResource.isExists(path))) {
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
        });
    }
	/* 字符串转JSON对象
	 * str 字符串参数
	 * 返回JSON对象
	 */
    static strToJson(str='') {
        if(str === '') {
            return;
        }
        return JSON.parse(str);
    }
	/* 获取配置文件
	 * path配置文件路径
	 * 范围所有配置项
	 */
    static async getConfig(path='') {
        if(path==='') {
            return;
        }
        let str = await (SResource.readFile(path)),
            obj = SResource.strToJson(str);
        return obj;
    }
	/* 获取配置文件的配置项
	 * path 配置文件路径
	 * key 配置项
	 * 返回配置项的值
	 */
    static async getConfigItem(path='', key='') {
        if(path==='' || key === '') {
            return;
        }
        let obj = await (SResource.getconfig(path));
        return obj[key];
    }
}

module.exports = SResource;