(function () {
  var __webpack_modules__ = {
    "./src/index.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
      __webpack_require__.r(__webpack_exports__);

      var _js_format__WEBPACK_IMPORTED_MODULE_0__ =
        __webpack_require__("./src/js/format.js");


      var _js_format__WEBPACK_IMPORTED_MODULE_0___default =
        __webpack_require__.n(_js_format__WEBPACK_IMPORTED_MODULE_0__);
      /*
       * @Author: lzy-Jerry
       * @Date: 2022-09-29 19:18:35
       * @LastEditors: lzy-Jerry
       * @LastEditTime: 2023-01-31 20:48:48
       * @FilePath: \learn-webpack\06_webpack模块化原理\src\index.js
       * @Description:
       */
      // esm 导出 commonjs导入
      const { sum, mul } = __webpack_require__(
        /*! ./js/math */ "./src/js/math.js"
      );

      // commonjs导出 esm导入
      console.log(sum(20, 30));
      console.log(mul(20, 30));

      console.log(
        _js_format__WEBPACK_IMPORTED_MODULE_0___default().dateFormat("aaa")
      );
      console.log(
        _js_format__WEBPACK_IMPORTED_MODULE_0___default().priceFormat("aaa")
      );
    },

    // cjs导出 esm导入
    // cjs导出时会将整个模块变成对象中的函数传入module 通过module.exports带出
    "./src/js/format.js": function (module) {
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

    // esm导出 cjs导入
    // 通过r给esm模块添加esModule标识
    // esm导出时会传入module和module.exports 通过d函数定义 module.exports 通过get代理到 definition 并不是直接取值module.exports
    "./src/js/math.js": function (
      __unused_webpack_module,
      __webpack_exports__,
      __webpack_require__
    ) {
      "use strict";
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

  var __webpack_module_cache__ = {};

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
    // 判断是否是esm如果是esm则返回module.exports.default 否则返回 module.exports
    __webpack_require__.n = function (module) {
      var getter =
        module && module.__esModule
          ? function () {
              return module["default"];
            }
          : function () {
              return module;
            };
      __webpack_require__.d(getter, { a: getter });
      return getter;
    };
  })();

  !(function () {
    __webpack_require__.d = function (exports, definition) {
      for (var key in definition) {
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
    __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
  })();

  !(function () {
    // 将当前模块设置成 [Object Module] 以及 __esModule: true 添加标识
    __webpack_require__.r = function (exports) {
      if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
      }
      Object.defineProperty(exports, "__esModule", { value: true });
    };
  })();

  __webpack_require__("./src/index.js");
})();
