/*
 * :file description: 
 * :name: /react-test/webpack.config.js
 * :author: 张德志
 * :copyright: (c) 2022, Tungee
 * :date created: 2022-07-15 05:11:46
 * :last editor: 张德志
 * :date last edited: 2022-08-07 22:15:11
 */
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    mode: 'development',
    entry: './src/index.tsx',
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
    ],
   
}