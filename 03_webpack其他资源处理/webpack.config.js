const path = require('path')

module.exports = {
    entry: './src/index.js',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, './build'),
        publicPath: 'build/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: [
                    'style-loader',
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 1
                        }
                    }, // 简写
                    'postcss-loader'
                    // {
                    //     loader: 'postcss-loader',
                    //     options: {
                    //         postcssOptions: {
                    //             plugins: ['postcss-preset-env']
                    //         }
                    //     }
                    // }
                ]
            }, 
            {
                test: /\.less$/,
                use: [
                    'style-loader', // less-loader只是将 less转换成css 还需要将css转换成js 之后再插入到html中
                    {
                        loader: 'css-loader',
                        options: {
                            importLoaders: 2
                        }
                    },
                    'postcss-loader',
                    'less-loader'
                ]
            },
            {
                test: /\.(png|jpe?g|svg|gif|webp|jfif)/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            name:  'img/[name].[hash:6].[ext]',
                            limit: 8 * 1024,
                            // outputPath: 'img',
                            esModule: false
                        }
                    }
                ],
                type: 'javascript/auto'
            },
        ]
    }
}