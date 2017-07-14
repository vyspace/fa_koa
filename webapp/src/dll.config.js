'use strict';

const webpack = require('webpack'),
    path = require('path'),
    ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH, '../build'),
    env = process.env.NODE_ENV,
    venders = ['react', 'react-dom', 'prop-types', 'react-redux'];

let dir = '', fileName = '';
if(env === 'production'){
    dir = BUILD_PATH;
    fileName =  './js/[name].[chunkhash].js'
}
else {
    dir = ROOT_PATH;
    fileName = './js/[name].js'
}

module.exports = {
    output: {
        path: dir,
        filename: fileName,
        library: '[name]'
    },
    entry: {
        lib: venders
    },
    plugins: [
        new webpack.DllPlugin({
            path: 'manifest.json',
            name: '[name]',
            context: __dirname
        })
    ]
}

