'use strict';
//const SNBatisUtil = require('../../m_db/util/SNBatisUtil');
const User = require('./User');
class Test {
    constructor() {

    }
    async build() {
        SNBatisUtil.createSession();
        let user = new User();
        user.Username = "hello";
        user.Password = "1234";
        console.log(user.Username);

    }
}

let t = new Test();
t.build();