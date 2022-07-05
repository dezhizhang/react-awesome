const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode:'development',
    entry:'./src/index.tsx',
    devtool:false,
    output:{
        path:path.resolve(__dirname,'build'),
        filename:'[name].[hash:8].js'
    },
    resolve:{
        alias:{
            '@':path.resolve(__dirname,'src')
        }
    },
    devServer:{
        static: {
            directory: path.join(__dirname, 'public'),
          },
          compress: true,
          port: 8000,
    },
    module:{
        rules:[
            {
                test:/\.tsx?$/,
                loader:'ts-loader'
            }
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            template:'./public/index.html'
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
}