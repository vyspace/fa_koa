'use strict';

const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ROOT_PATH = path.resolve(__dirname),
    APP_PATH = path.resolve(ROOT_PATH),
    BUILD_PATH = path.resolve(ROOT_PATH);

module.exports = {
    entry: {
        app: path.resolve(APP_PATH, 'index.jsx')
    },
    output: {
        path: BUILD_PATH,
        filename: 'bundle.js'
    },
    devServer: {
        historyApiFallback: true,
        hot: true,
        inline: true
    },
    resolve: {
        extensions: ['.js', '.jsx']
    },
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                use: ['babel-loader']
            }
        ]
    },
    plugins: [
        new webpack.DllReferencePlugin({
            contest: ROOT_PATH,
            manifest: require('./manifest.json')
        }),
        new HtmlWebpackPlugin({title: 'react app', template: 'index.ejs'})
    ]
}
