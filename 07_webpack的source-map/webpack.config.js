/*
 * @Author: lzy-Jerry
 * @Date: 2022-09-29 19:18:35
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-02-09 21:00:04
 * @FilePath: \learn-webpack\07_webpack的source-map\webpack.config.js
 * @Description: 
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // mode为development时devtool 默认的就是eval-source-map
    devtool: 'eval-source-map',
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    plugins: [
        new CleanWebpackPlugin(),
        new HtmlWebpackPlugin({
            title: 'webpack模块化原理'
        })
    ]
}