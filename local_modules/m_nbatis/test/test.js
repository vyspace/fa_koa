'use strict';
const chai = require('chai'),
    path = require('path'),
    SqlSessionFactory = require('../lib/SqlSessionFactory'),
    User = require('./User');

const test = async () => {
    const configPath = path.join(__dirname, './nbatis_config.json')
    const factory = new SqlSessionFactory().createPool(configPath);
    let session = null;
    try{
        session = await (factory.openSession());
        let user = new User(0, 'test05', '123456');
        await session.insert('User.add', user);
        await session.commits();
    }
    catch(err){
        await session.rollbacks();
        throw err;
    }
    finally {
        if(session){
            await session.release();
        }
    }
}

test();

// describe('测试mysql数据库连接', ()=>{
//     describe('SqlSessionFactory', ()=> {
//         it('#testConnection', (done) => {
//             const connection = new SqlSessionFactory().createConnection(dataSource);
//             let pro = factory.testConnection();
//             pro.then(function (flag) {
//                 chai.expect(flag).to.equal(true);
//                 done();
//             });
//         });
//     });
// });
//
// describe('测试mysql数据插入', ()=>{
//     describe('SqlSessionFactory', ()=> {
//         it('#selectOne', (done) => {
//             const connetion = SConnection.build(dataSource);
//             let pro = SConnection.testConnection(connetion);
//             pro.then(function (flag) {
//                 chai.expect(flag).to.equal(true);
//                 done();
//             });
//         });
//     });
// });
