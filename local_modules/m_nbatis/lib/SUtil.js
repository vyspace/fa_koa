'use strict';
const path = require('path');
class SUtil {
    static mapperHandler(mappers, tag, param) {
        let tagArr = tag.split('.'),
            mapperPath = mappers[tagArr[0]],
            mapperAPath = path.join(mappers.aPath, mapperPath),
            sqlConfig = require(mapperAPath),
            tagObj = sqlConfig[tagArr[1]],
            sql = SUtil.paramHandler(tagObj.sql, tagObj.parameterType, param);
        return tagObj.sql;
    }
    static paramHandler(sql, type, param) {
        const reg = /{(.+?)}/;
        let match = null;
        if(type === 'object') {
            while(match = reg.exec(sql)) {
                if(match && match.length > 0){
                    sql = sql.replace(match[0], param[match[1]]);
                }
                else{
                    break;
                }
            }
        }
        else {
            match = reg.exec(sql)
            sql = sql.replace(match[0], param[match[1]]);
        }
        return sql;
    }
}

module.exports = SUtil;
