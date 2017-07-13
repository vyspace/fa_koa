'use strict';

const webpack = require('webpack'),
    path = require('path'),
    ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH, '../build'),
    env = process.env.NODE_ENV,
    venders = ['react', 'react-dom', 'redux', 'react-redux', 'prop-types'];

let dir = '';
if(env === 'development') {
    dir = ROOT_PATH
}
else{
    dir = BUILD_PATH
}

module.exports = {
    output: {
        path: dir,
        filename: './js/[name].js',
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

