'use strict';

const webpack = require('webpack'),
    venders = ['react', 'react-dom', 'redux', 'react-redux'];

module.exports = {
    output: {
        path: __dirname,
        filename: '[name].js',
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

