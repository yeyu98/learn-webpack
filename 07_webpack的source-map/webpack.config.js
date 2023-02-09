/*
 * @Author: lzy-Jerry
 * @Date: 2022-09-29 19:18:35
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-02-09 20:13:15
 * @FilePath: \learn-webpack\06_webpack模块化原理\webpack.config.js
 * @Description: 
 */
const path = require('path')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
    mode: 'development', // mode为development时devtool 默认的就是eval-source-map
    devtool: 'eval',
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