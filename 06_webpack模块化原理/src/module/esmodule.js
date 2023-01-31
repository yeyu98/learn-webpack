(function () {
  "use strict";
  // 1.定义了一个对象存放路径与模块的映射
  var __webpack_modules__ = {
    "./src/esmodule_index.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      // 给esmodule添加标识
      __webpack_require__.r(__webpack_exports__);
      // 调用了第一个模块 math.js
      var _js_math__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__("./src/js/math.js");

      console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.sum)(1, 2));
      console.log((0, _js_math__WEBPACK_IMPORTED_MODULE_0__.mul)(1, 2));
    },

    "./src/js/math.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      __webpack_require__.r(__webpack_exports__);
      __webpack_require__.d(__webpack_exports__, {
        sum: function () {
          return sum;
        },
        mul: function () {
          return mul;
        },
      });
      const sum = (num1, num2) => num1 + num2;
      const mul = (num1, num2) => num1 * num2;
    },
  };

  // 2.模块缓存
  var __webpack_module_cache__ = {};
  // 3.require函数的实现（加载模块）
  function __webpack_require__(moduleId) {
    if (__webpack_module_cache__[moduleId]) {
      return __webpack_module_cache__[moduleId].exports;
    }
    var module = (__webpack_module_cache__[moduleId] = {
      exports: {},
    });
    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);
    return module.exports;
  }

  !(function () {
    // __webpack_require__这个函数对象添加了d属性 -> 值function
    // NOTE 做了一层代理当使用 exports.sum === definition['sum'] 这么做是为了限制某种语法的书写
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
        // 判断definition中的 definition = {sum: ..., mul: ...} 在当前的exports中是否存在
        if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
        }
      }
    };
  })();

  !(function () {
    // __webpack_require__这个函数对象添加了o属性 -> 值function
    // 判断属性prop是否属于obj
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  })();

  !(function () {
    // __webpack_require__这个函数对象添加了r属性 -> 值function
    // TODO Symbol.toStringTag 知识盲区 内置通用字符串比如：[Object Array]
    // 给exports添加 exports = {Symbol.toStringTag:  "Module"}  Object.prototype.toString.call(exports)  === [object module]
    // 标识当前的exports是个__esModule  exports = {Symbol.toStringTag: "Module", "__esModule":  true}
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  __webpack_require__("./src/esmodule_index.js");
})();
