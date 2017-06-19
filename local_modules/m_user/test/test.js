'use strict';

const SqlSessionFactory = require('m_nbatis'),
    config = require('./nbatis_config.json');
class Test {
    constructor() {
        const factory = new SqlSessionFactory().build(config);
    }
}