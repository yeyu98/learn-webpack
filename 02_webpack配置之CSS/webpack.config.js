const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build')
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    'css-loader', // 简写
                ]
            }, 
            {
                test: /\.less$/,
                use: [
                    'style-loader', // less-loader只是将 less转换成css 还需要将css转换成js 之后再插入到html中
                    'css-loader',
                    'less-loader'
                ]
            }
        ]
    }
}