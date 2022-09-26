webpack
- webpack的一些功能
    - 模块化打包方式；
    - 编译高级特性，如typscript、ES6、less、sass之类的；
    - 监听文件反应到浏览器上；
    - 代码压缩、合并以及其他优化；
- webpack简介
    - 是一个静态模块化打包的打包工具；
    - 静态：指的是打包之后的文件都是些静态文件；
    - 模块化：指的是在开发的时候可以使用任何一种模块化方案，比如cjs，esm，但webpack打包之后的文件
              就会磨平不同模块化方案带来的浏览器不支持的问题，同时也能兼容所有浏览器（如不支持模块化的浏览器IE）的运行；
              PS：现代浏览器中支持模块化需要将 script type="module"来开启模块化；
    - 打包：将你所使用的任何一种开发模式以及一些高级特性打包成js、css、html以及一些其他的静态文件的打包工具；
    - 构建原理：从入口开始，会对每个引入的模块生成一个依赖图，如果有些文件没有被引用则不存在于依赖图中；
                之后遍历依赖图对图中的每个模块进行转换（通过loader）打包；
- 起步
    - npm install webpack webpack-cli --save-dev
    - webpack-cli：不是必需品，但本质上就是用来解析webpack在package.json中配置后的参数，本质上就是一个函数根据传入的参数来执行webpack的某些动作；
- 配置
    - entry
    - output
    - loader（用于对模块源代码做一个转换，转换成webpack认识的js）
        - 配置方法
            - 手动配置：loader 从右到左（或从下到上）地取值(evaluate)/执行(execute)，每个loader都是一个流程需要一整套的执行链路；
                - 通过module.rules来引入多个loader
                    - test<Regx>：匹配文件后缀告诉webpack是哪个文件要使用loader；
                    - use<object [] | string []>：使用对应的loader来解析对应的类型的文件；
                        - loader: 传入对应的loader；
                        - options<object>: 传入当前loader的配置；
            - 内联配置，如import Styles from '!style-loader!css-loader?modules!./styles.css';
        - loader使用
            - css、less、sass解析loader；
            - css语法、js语法在不同浏览器中的兼容问题的loader（需要确定项目需要支持的浏览器版本）；
                - browserslist工具：负责查询当前条件符合的浏览器，也就是当前浏览器市场占有率，共享目标浏览器的配置;
                    - 查询原理是通过canisuse-lite的工具查询caniuse上面所对应的浏览器的数据；
                    - 处理兼容
                        - css前缀：Autoprefiexer；
                        - js语法兼容： babel-loader；
                        - postcss-preset-env
                        - eslint-plugin-compat
                        - stylelint-no-unsupported-browser-features
                        - postcss-normalize
                        - obsolete-webpack-plugin
                    - 编写规则
                        - 百分比：1%，表示市场占有率1%的浏览器；
                        - dead： 24个月没有官方支持或更新的浏览器；
                        - last 2 versions：每个浏览器最近的两个版本；
                        - 并集通过","或or分隔、交集通过 and、非通过not；
                    