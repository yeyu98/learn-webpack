/*
 * @Author: lzy-Jerry
 * @Date: 2022-09-29 19:18:35
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-02-05 11:19:12
 * @FilePath: \learn-webpack\06_webpack模块化原理\src\index.js
 * @Description: 
 */
// esm 导出 commonjs导入
const { sum, mul } = require("./js/math")

// commonjs导出 esm导入
import format from "./js/format"

console.log(sum(20, 30))
console.log(mul(20, 30))

console.log(format.dateFormat("aaa"))
console.log(format.priceFormat("aaa"))

console.log(abc)