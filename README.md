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
    - 样式处理
        - style-loader：生成style标签插入到head里；
        - css-loader：将css转换成webpack所认识的js代码；
            - options.importLoaders: 当css文件中有@import引入的模块时需要返回几个loader之后重新处理一次该模块（根据后面有几个loader来定）；
        - less-loader：仅仅只是将less转换成css；
    - postcss工具（根据browserslist来判断哪些需要转换）
        - css的转换和适配
            - 给浏览器添加前缀；
            - css样式重置；
        - 使用
            - 添加postcss、postcss-loader、postcss-cli（可以不添加）；
                - 通过命令行输出 npx postcss --use autoprefixer -o result.css ./css/test.css
            - 添加配置对应的插件；
                - Autoprefixer：添加样式前缀；
                - postcss-preset-env：将现代样式转换为绝大部分浏览器都能认识的样式，类似于babel的作用  同时也有Autoprefixer的功能；
                - 插件配置项也可以通过postcss.config.js文件来全局配置；
    - 浏览器兼容browserslist
        - css语法、js语法在不同浏览器中的兼容问题的loader（需要确定项目需要支持的浏览器版本）；
        - browserslist工具：负责查询当前条件符合的浏览器，也就是当前浏览器市场占有率，共享目标浏览器的配置;
            - 查询原理是通过canisuse-lite的工具查询caniuse上面所对应的浏览器的数据；
            - 处理兼容
                - Autoprefixer：添加css前缀；
                - babel-loader：js语法兼容；
                - postcss-preset-env：既包含Autoprefixer的功能又可以转换现代css成绝大部分浏览器可以识别的css；
                - eslint-plugin-compat
                - stylelint-no-unsupported-browser-features
                - postcss-normalize
                - obsolete-webpack-plugin
            - 编写规则
                - 百分比：1%，表示市场占有率1%的浏览器；
                - dead： 24个月没有官方支持或更新的浏览器；
                - last 2 versions：每个浏览器最近的两个版本；
                - 并集通过","或or分隔、交集通过 and、非通过not；
    - 其他资源处理
        - 图片处理
            - file-loader：配置file-loader的时候需要通过output.publicPath指定一下静态资源的位置（可解析图片以及字体图标）；
                - options
                    - [ext]: 扩展名；
                    - [name]: 当前文件的名称；
                    - [hash]: 由md4散列函数生成的32位16进制的字符（128位）；
                    - [contentHash]: 在file-loader里同hash；
                    - [hash:<length>]：可指定生成的hash长度；
                    - outputPath：指定资源存放的路径；
                - 问题
                    - 问题一：打包background-image的时候会多打包一份图片出来，原因是css-loader6以上打包时会将url('xxx.jpg')默认转换成require('xxx.jpg') --- 在loader配置里设置type: 'javascript/auto'；
                    - 问题二：又会导致第二个问题生成的路径中出现/[object%20Module]，原因是新版的file-loader默认采用esModule引入，而css-loader又会默认将url转换成require() cjs引入两种方式不一样导致 --- 设置options.esModule为false；
                    - 问题三：因为这时候的index还放在项目根目录之下因此img的路径其实是在src下的，但打包之后实际的资源其实是在build/下的此时导致两者的路径不一致 --- 设置output.publicPath 为 build/；
            - url-loader：配置图片资源限制在xxkb之下通过url-loader转换成base64，之上的通过file-loader打包 且 只需要配置url-loader即可；
        - 文本处理
            - raw-loader：将txt、cvg或者指定的格式类型文件解析成字符串导出；
                - 扩展知识 
                    - innerText和textContent的区别
                        - textContent任意一个node节点都可以使用，innerText只有Html元素可以使用（有待考证目前还不能确定哪些属于Node节点哪些属于Html元素）；
                        - innerText获取到的只是单纯的文本，textContent可以获取所有子元素的内容包括<script>和<style>元素的文本内容；
                        - innerText受css样式的影响不会展示隐藏的文本内容，而textContent可以展示所有的不受css影响；
        - 资源模块类型（asset module type）：替换原先处理其他资源的loader；
            - asset/resource：发送一个单独的文件并导出url功能类似于file-loader；
                - 如果想将图片放入指定文件夹里则需要设置匹配的图片文件类型里的generator.filename 和原先file-loader设置名字的方法一样但扩展会自动加上".";
                - output.assetModuleFilename 也可以设置输出图片资源的文件名以及文件夹但这个是全局的资源名设置，一旦设置了之后所有的文件都会匹配上并输出到文件夹中，因为是全局资源存放文件夹不建议这么使用；
            - asset/inline：导出资源的data uri功能类似于url-loader；
                - 需要注意的是一旦设置了这个类型所有的图片都会被转换成base64则不需要指定文件存放文件夹以及名字；
            - asset/source：将资源文件转换为字符串导出功能类似于raw-loader；
            - asset：导出资源的data uri或者一个单独的文件url并在这之间做选择，可以指定大小限制，功能类似于url-loader和file-loader；
                - 设置了此类型后需要设置一下parser.dataUrlCondition.maxSize 来指定限制的图片大小；
    - plugin
        - 扩展webpack的功能比如打包压缩、资源管理、坏境变量注入等，可以贯穿webpack的整个生命周期，在不同的生命周期执行不同的任务；
        - CleanWebpackPlugin：再次打包的时候自动清理dist文件；
        - HtmlWebpackPlugin：在dist文件中生成html文件；
            - 原理就是HtmlWebpackPlugin通过ejs模板文件生成html文件之后再插入对应的script、style之类的标签，我们也可以指定使用我们自己的模板文件来生成index.html；
        - DefinePlugin：内置的插件可以全局定义常量，使用时需要从webpack中引入；
        - CopyWebpackPlugin：将某个文件夹下面的一些文件直接复制到dist文件中；
            - 属性 
                - from：指定文件夹；
                - ignoreOptions：该文件夹下不需要copy过去的文件，需要加前缀**/替代from里的文件夹；
- 模块化原理