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
- 起步
    - npm install webpack webpack-cli --save-dev
    - webpack-cli：不是必需品，但本质上就是用来解析webpack在package.json中配置后的参数，本质上就是一个函数根据传入的参数来执行webpack的某些动作；
    