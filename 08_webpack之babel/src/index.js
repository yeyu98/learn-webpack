/*
 * @Author: lzy-Jerry
 * @Date: 2022-09-29 19:18:35
 * @LastEditors: lzy-Jerry
 * @LastEditTime: 2023-03-27 22:13:39
 * @FilePath: \learn-webpack\06_webpack模块化原理\src\index.js
 * @Description: 
 */
// import "core-js/stable"
// import "regenerator-runtime/runtime"

const message = "Hello, babel"

const foo = (info) => {
    console.log(info)
}

foo(message)

// class Babel {
//     constructor() {
       
//     }
// }

const p = new Promise((resolve, reject) => {
    resolve(123)
})

p.then(res => {
    console.log(res)
})

// const aa = async () => {
//     const data = await p
//     console.log("data --->>>", data)
// }

// aa()