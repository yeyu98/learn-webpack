/*
 * @Author: lzy-Jerry
 * @Date: 2023-01-30 21:05:09
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-01-30 21:58:31
 * @FilePath: \learn-webpack\06_webpack模块化原理\src\module\commonjs.js
 * @Description: 
 */
// (function () {
/**
 * 定义了一个模块对象以模块路径为key，模块内容为function value；
 **/
var __webpack_modules__ = {
  "./src/js/format.js": function (module) {
    const dateFormat = (time) => {
      return "2022/09/29";
    };

    const priceFormat = (time) => {
      return "29.99";
    };
    // 将当前模块内容通过传入的module导出利用了对象的赋值只赋值地址的特性
    module.exports = {
      dateFormat,
      priceFormat,
    };
  },
};

// 定义一个缓存对象
var __webpack_module_cache__ = {};

// 导入webpack中的模块
function __webpack_require__(moduleId) {
  // 判断是否存在于缓存中
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }

  // TODO 这里为什么需要加上括号？
  // 等同于 var module = __webpack_module_cache__[moduleId] = {exports: {}};
  // 初始化module以及缓存module对象为 {exports:{}}
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });

  // 将初始化之后的module={exports: {}} 传入当前模块函数中
  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);

  // module.exorts = {dateFormat, priceFormat}
  return module.exports;
}

// TODO 这里的！是将后面的内容作为一个表达式执行 此处涉及知识盲区
// 将函数前面使用()、!、+、-、~等符号都能将函数变成函数表达式，解析器就能识别并执行
// 此处等同于立即执行函数
!(function () {
  const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js");
  console.log(dateFormat(12));
  console.log(priceFormat(12));
})();
// })();
