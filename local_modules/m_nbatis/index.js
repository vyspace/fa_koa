'use strict';

const SqlSessionFactory = require('./lib/SqlSessionFactory'),
    SResource = require('./lib/SResource'),
    obj = {
        "SqlSessionFactory": SqlSessionFactory,
        "SResource": SResource
    }

module.exports = obj;