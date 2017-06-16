'use strict';
const Util = require('m_util');

const test = async ()=>{
	let str = await (Util.Fs.readFile('./config.json'));
	let obj = Util.Common.strToJson(str);
	console.log(obj.host);
}
test();
// async function selectAllData() {
// 	let sql = 'SELECT * FROM _fakoa';
// 	dataList = await query(sql);
// 	return dataList;
// }

