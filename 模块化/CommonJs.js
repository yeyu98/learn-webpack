// 定义了一个对象
// 以路径为key,执行的函数为value
var __webpack_modules__ = {
  "./src/js/format.js": function (module) {
    // module = {export: {}}
    const dateFormat = (time) => {
      return "2022/09/29";
    };
    const priceFormat = (time) => {
      return "29.99";
    };
    module.exports = {
      dateFormat,
      priceFormat,
    };
  },
};

// 定义了一个缓存对象
var __webpack_module_cache__ = {};

function __webpack_require__(moduleId) {
  // 判断对象中是否有./src/js/format.js 这个key,有就直接返回
  if (__webpack_module_cache__[moduleId]) {
    return __webpack_module_cache__[moduleId].exports;
  }
  /* 
	没有的话就让__webpack_module_cache__['./src/js/format.js'] = module = {
		exports: {}
	}
	
	*/
  var module = (__webpack_module_cache__[moduleId] = {
    exports: {},
  });

  module.exports = {};
  __webpack_module_cache__[moduleId].module = {};

  // __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
  __webpack_modules__[moduleId](module);

  return module.exports;
}

!(function () {
  const { dateFormat, priceFormat } = __webpack_require__("./src/js/format.js");
  console.log(dateFormat(12));
  console.log(priceFormat(12));
})();
