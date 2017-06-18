'use strict';

const PoolFactory = require('../model/PoolFactory'),
    factory = new PoolFactory(),
    pool = factory.getInstance();

module.exports = pool;

