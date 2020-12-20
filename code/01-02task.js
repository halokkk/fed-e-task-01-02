/*
 * @Author: your name
 * @Date: 2020-12-07 13:59:51
 * @LastEditTime: 2020-12-17 15:46:59
 * @LastEditors: Please set LastEditors
 * @Description: In User Settings Edit
 * @FilePath: \fed-e-task-01-02\code\01-02task.js
 */


var a = []
for (var i = 0; i < 10; i++) {
    a[i] = function () {
        console.log(i)
    }
}
a[6]()

// => 10
// 变量提升

// var tmp = 123
// if (true) {
//     console.log(tmp)
//     let tmp
// }

// =>ReferenceError: Cannot access 'tmp' before initialization
// let 声明变量仅在块中生效且不会变量提升，在声明变量前调用变量会报错

// ES6找最小值
var arr = [12, 34, 32, 89, 4];

let min = arr[0];
for (const item of arr) {
    min = item < min ? item : min;
}
console.log('min===', min)

// 5：定时器为箭头函数，this指向最近的函数this指向。最近的函数是fn，fn函数中的this指向obj，所以this也指向obj，this.a即obj.a，所以输出20。
var a = 10;
var obj = {
    a: 20,
    fn() {
        setTimeout(() => {
            console.log(this.a);
        })
    }
}
obj.fn(); // => 20





