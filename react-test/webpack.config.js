/*
 * :file description: 
 * :name: /react-test/webpack.config.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-15 05:11:46
 * :last editor: 张德志
 * :date last edited: 2022-07-16 15:04:08
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.js',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'bundle.js'
    },
    devServer:{
        port:8000,
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html',
            inject:'body'
        })
    ]
}