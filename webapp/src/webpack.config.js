'use strict';

const path = require('path'),
    webpack = require('webpack'),
    HtmlWebpackPlugin = require('html-webpack-plugin'),
    ExtractTextPlugin = require("extract-text-webpack-plugin"),
    env = process.env.NODE_ENV,
    ROOT_PATH = path.resolve(__dirname),
    BUILD_PATH = path.resolve(ROOT_PATH, '../build');

let dir = '';
if(env === 'development') {
    dir = ROOT_PATH
}
else{
    dir = BUILD_PATH
}

module.exports = {
    entry: {
        app: path.resolve(ROOT_PATH, './entry.js')
    },
    output: {
        path: dir,
        filename: './js/bundle.js'
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
                test: /\.(png|jpg)$/,
                loader: 'url-loader?limit=8192'
            },
            {
                test: /\.scss$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
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
        new HtmlWebpackPlugin({title: 'react app', template: 'app.ejs'}),
        new ExtractTextPlugin({
            filename:  (getPath) => {
                return getPath('./css/base.css').replace('css/js', 'css');
            },
            allChunks: true
        })
    ]
}
