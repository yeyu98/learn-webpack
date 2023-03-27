/*
 * @Author: lzy-Jerry
 * @Date: 2023-03-21 21:45:08
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-03-27 21:30:26
 * @Description: 
 */
module.exports = {
    presets: [
        [
            "@babel/preset-env",
            {
                // false 配置之后不对当前预设使用polyfill；
                // usage 配置之后只针对项目中引入的一些特性进行垫片适配不同浏览器，类似于按需引入，
                //      默认情况下babel会使用corejs2来生成polyfill此时可能会因为babel版本高于corejs2而导致生成代码出错；
                //      需要注意的是在此配置的polyfill生成的对旧浏览器中新特性支持的代码会与node_modules中生成的冲突
                //      因此需要对babel-loader配置排除node_modules；
                // entry 在入口文件中引入 corejs和 regenerator-runtime此时会根据配置的.browserlistrc来决定需要引入哪些垫片来支持这些浏览器 （根据浏览器来判断且引入所有的特性支持这些浏览器） 此时文件会变得异常的大；
                useBuiltIns:"usage",
                corejs: 3
            }
        ]
    ]
}