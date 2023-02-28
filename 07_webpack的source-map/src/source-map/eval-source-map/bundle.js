/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (function () {
  // webpackBootstrap
  /******/ var __webpack_modules__ = {
    /***/ "./src/index.js":
      /*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _js_format__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./js/format */ "./src/js/format.js");\n/* harmony import */ var _js_format__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_js_format__WEBPACK_IMPORTED_MODULE_0__);\n/*\r\n * @Author: lzy-Jerry\r\n * @Date: 2022-09-29 19:18:35\r\n * @LastEditors: lzy-Jerry\r\n * @LastEditTime: 2023-02-05 11:19:12\r\n * @FilePath: \\learn-webpack\\06_webpack模块化原理\\src\\index.js\r\n * @Description: \r\n */\r\n// esm 导出 commonjs导入\r\nconst { sum, mul } = __webpack_require__(/*! ./js/math */ "./src/js/math.js")\r\n\r\n// commonjs导出 esm导入\r\n;\r\n\r\nconsole.log(sum(20, 30))\r\nconsole.log(mul(20, 30))\r\n\r\nconsole.log(_js_format__WEBPACK_IMPORTED_MODULE_0___default().dateFormat("aaa"))\r\nconsole.log(_js_format__WEBPACK_IMPORTED_MODULE_0___default().priceFormat("aaa"))\r\n\r\nconsole.log(abc)\r\n\r\n\r\n\r\n\r\n\r\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2luZGV4LmpzP2I2MzUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7O0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsT0FBTyxXQUFXLEdBQUcsbUJBQU8sQ0FBQyxtQ0FBVzs7QUFFeEM7QUFDQSxDQUFnQzs7QUFFaEM7QUFDQTs7QUFFQSxZQUFZLDREQUFpQjtBQUM3QixZQUFZLDZEQUFrQjs7QUFFOUIiLCJmaWxlIjoiLi9zcmMvaW5kZXguanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKlxyXG4gKiBAQXV0aG9yOiBsenktSmVycnlcclxuICogQERhdGU6IDIwMjItMDktMjkgMTk6MTg6MzVcclxuICogQExhc3RFZGl0b3JzOiBsenktSmVycnlcclxuICogQExhc3RFZGl0VGltZTogMjAyMy0wMi0wNSAxMToxOToxMlxyXG4gKiBARmlsZVBhdGg6IFxcbGVhcm4td2VicGFja1xcMDZfd2VicGFja+aooeWdl+WMluWOn+eQhlxcc3JjXFxpbmRleC5qc1xyXG4gKiBARGVzY3JpcHRpb246IFxyXG4gKi9cclxuLy8gZXNtIOWvvOWHuiBjb21tb25qc+WvvOWFpVxyXG5jb25zdCB7IHN1bSwgbXVsIH0gPSByZXF1aXJlKFwiLi9qcy9tYXRoXCIpXHJcblxyXG4vLyBjb21tb25qc+WvvOWHuiBlc23lr7zlhaVcclxuaW1wb3J0IGZvcm1hdCBmcm9tIFwiLi9qcy9mb3JtYXRcIlxyXG5cclxuY29uc29sZS5sb2coc3VtKDIwLCAzMCkpXHJcbmNvbnNvbGUubG9nKG11bCgyMCwgMzApKVxyXG5cclxuY29uc29sZS5sb2coZm9ybWF0LmRhdGVGb3JtYXQoXCJhYWFcIikpXHJcbmNvbnNvbGUubG9nKGZvcm1hdC5wcmljZUZvcm1hdChcImFhYVwiKSlcclxuXHJcbmNvbnNvbGUubG9nKGFiYylcclxuXHJcblxyXG5cclxuXHJcblxyXG4iXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/index.js\n'
        );

        /***/
      },

    /***/ "./src/js/format.js":
      /*!**************************!*\
  !*** ./src/js/format.js ***!
  \**************************/
      /***/ function (module) {
        eval(
          "const dateFormat = (time) => {\r\n    return '2022/09/29'\r\n}\r\n\r\nconst priceFormat = (time) => {\r\n    return '29.99'\r\n}\r\nmodule.exports = {\r\n    dateFormat,\r\n    priceFormat\r\n}//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2pzL2Zvcm1hdC5qcz84ZTQyIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSIsImZpbGUiOiIuL3NyYy9qcy9mb3JtYXQuanMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJjb25zdCBkYXRlRm9ybWF0ID0gKHRpbWUpID0+IHtcclxuICAgIHJldHVybiAnMjAyMi8wOS8yOSdcclxufVxyXG5cclxuY29uc3QgcHJpY2VGb3JtYXQgPSAodGltZSkgPT4ge1xyXG4gICAgcmV0dXJuICcyOS45OSdcclxufVxyXG5tb2R1bGUuZXhwb3J0cyA9IHtcclxuICAgIGRhdGVGb3JtYXQsXHJcbiAgICBwcmljZUZvcm1hdFxyXG59Il0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/js/format.js\n"
        );

        /***/
      },

    /***/ "./src/js/math.js":
      /*!************************!*\
  !*** ./src/js/math.js ***!
  \************************/
      /***/ function (
        __unused_webpack_module,
        __webpack_exports__,
        __webpack_require__
      ) {
        "use strict";
        eval(
          '__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   "sum": function() { return /* binding */ sum; },\n/* harmony export */   "mul": function() { return /* binding */ mul; }\n/* harmony export */ });\nconst sum = (num1, num2) => num1 + num2\r\nconst mul = (num1, num2) => num1 * num2//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9sZWFybi13ZWJwYWNrLy4vc3JjL2pzL21hdGguanM/OWMzOSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOzs7OztBQUFPO0FBQ0EiLCJmaWxlIjoiLi9zcmMvanMvbWF0aC5qcy5qcyIsInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBjb25zdCBzdW0gPSAobnVtMSwgbnVtMikgPT4gbnVtMSArIG51bTJcclxuZXhwb3J0IGNvbnN0IG11bCA9IChudW0xLCBudW0yKSA9PiBudW0xICogbnVtMiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/js/math.js\n'
        );

        /***/
      },

    /******/
  };
  /************************************************************************/
  /******/ // The module cache
  /******/ var __webpack_module_cache__ = {};
  /******/
  /******/ // The require function
  /******/ function __webpack_require__(moduleId) {
    /******/ // Check if module is in cache
    /******/ if (__webpack_module_cache__[moduleId]) {
      /******/ return __webpack_module_cache__[moduleId].exports;
      /******/
    }
    /******/ // Create a new module (and put it into the cache)
    /******/ var module = (__webpack_module_cache__[moduleId] = {
      /******/ // no module.id needed
      /******/ // no module.loaded needed
      /******/ exports: {},
      /******/
    });
    /******/
    /******/ // Execute the module function
    /******/ __webpack_modules__[moduleId](
      module,
      module.exports,
      __webpack_require__
    );
    /******/
    /******/ // Return the exports of the module
    /******/ return module.exports;
    /******/
  }
  /******/
  /************************************************************************/
  /******/ /* webpack/runtime/compat get default export */
  /******/ !(function () {
    /******/ // getDefaultExport function for compatibility with non-harmony modules
    /******/ __webpack_require__.n = function (module) {
      /******/ var getter =
        module && module.__esModule
          ? /******/ function () {
              return module["default"];
            }
          : /******/ function () {
              return module;
            };
      /******/ __webpack_require__.d(getter, { a: getter });
      /******/ return getter;
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/define property getters */
  /******/ !(function () {
    /******/ // define getter functions for harmony exports
    /******/ __webpack_require__.d = function (exports, definition) {
      /******/ for (var key in definition) {
        /******/ if (
          __webpack_require__.o(definition, key) &&
          !__webpack_require__.o(exports, key)
        ) {
          /******/ Object.defineProperty(exports, key, {
            enumerable: true,
            get: definition[key],
          });
          /******/
        }
        /******/
      }
      /******/
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/hasOwnProperty shorthand */
  /******/ !(function () {
    /******/ __webpack_require__.o = function (obj, prop) {
      return Object.prototype.hasOwnProperty.call(obj, prop);
    };
    /******/
  })();
  /******/
  /******/ /* webpack/runtime/make namespace object */
  /******/ !(function () {
    /******/ // define __esModule on exports
    /******/ __webpack_require__.r = function (exports) {
      /******/ if (typeof Symbol !== "undefined" && Symbol.toStringTag) {
        /******/ Object.defineProperty(exports, Symbol.toStringTag, {
          value: "Module",
        });
        /******/
      }
      /******/ Object.defineProperty(exports, "__esModule", { value: true });
      /******/
    };
    /******/
  })();
  /******/
  /************************************************************************/
  /******/ // startup
  /******/ // Load entry module
  /******/ __webpack_require__("./src/index.js");
  /******/ // This entry module used 'exports' so it can't be inlined
  /******/
})();
