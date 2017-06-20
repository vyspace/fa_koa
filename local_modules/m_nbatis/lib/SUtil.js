'use strict';
const path = require('path');
class SUtil {
    /* 按照全局配置的mappers获取每一个类中指定的sql语句
     * mappers 每一个类对应的mapper文件
     * tag 类+id的标签
     * param 参数
     * 返回找到的sql语句
     */
    static mapperHandler(tag, param, mappers) {
        let tagArr = tag.split('.'),
            mapperPath = mappers[tagArr[0]],
            mapperAPath = path.join(mappers.aPath, mapperPath),
            sqlConfig = require(mapperAPath),
            tagObj = sqlConfig[tagArr[1]],
            obj = SUtil.paramHandler(tagObj.sql, tagObj.parameterType, param);
        //SUtil.resultHandler(mappers, tagObj.resultType, tagArr[0], path.dirname(mapperAPath));
        return obj;
    }
    /* 将sql中的值做替换
     * sql未处理的sql语句
     * type 参数类型
     * param 参数值
     * 返回包含已处理的sql语句和参数数组的对象
     */
    static paramHandler(sql, type, param) {
        const reg = /{(.+?)}/;
        let match = null,
            paramArr = [];
        if(type === 'object') {
            while(match = reg.exec(sql)) {
                if(match && match.length > 0){
                    sql = sql.replace(match[0], '?');
                    paramArr.push(param[match[1]]);
                }
                else{
                    break;
                }
            }
        }
        else {
            match = reg.exec(sql);
            if(match && match.length > 0) {
                sql = sql.replace(match[0], '?');
                paramArr.push(param);
            }
        }
        return {
            "sql": sql,
            "paramArray": paramArr
        };
    }
    static resultHandler(mappers, resultType, className, aPath) {
        if(!resultType) {
            return;
        }
        if(resultType === 'cobject') {
            mappers.resultType = resultType
            mappers.classAPath = path.join(aPath, className);
        }

    }
}

module.exports = SUtil;
