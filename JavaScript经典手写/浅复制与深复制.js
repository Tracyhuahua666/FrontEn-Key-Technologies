// //浅拷贝方法1：
// function simpleCopy(target) {
//   let cloneTarget = {}
//   for (i in target) {
//     cloneTarget[i] = target[i]
//   }
//   return cloneTarget
// }
// // 浅拷贝方法2
// // objClone = {...obj} //ES6的对象解构，这个也是浅复制
// /**
//  * 深拷贝
//  * @param {Object} obj 要拷贝的对象
//  * @param {Map} map 用于存储循环引用对象的地址
//  */

// function deepCopy(obj, map = new Map()) {
//   if (typeof obj !== "object" || obj === null) {
//     return obj;
//   }
//   if (map.get(obj)) {
//     return map.get(obj);
//   } 
//   else {
//     // 初始化返回结果
//     let result = Array.isArray(obj) ? [] : {}
//     // 防止循环引用
//     map.set(obj, result);
//     for (const key in obj) {
//       // 递归调用
//       result[key] = deepCopy(obj[key], map);
//     }
//     // 返回结果
//     return result;
//   }
// }



// let obj = {
//   a: undefined,
//   b: {
//     c: function () {
//       console.log(1)
//     },
//     d: null,
//     g: NaN,
//     i: 'hello',
//     j: true,
//     k: undefined,
//     l: Date(),
//     m: function sum(a,b){a+b}
//   },
//   h: [10, 20, 30, 40]
// }

// obj.a = obj //添加循环引用

// //测试代码
// let obj_copy = deepCopy(obj)
// obj_copy.h.push(5)
// console.log('obj', obj)
// console.log('obj_copy', obj_copy)


function deepCopy(obj,myMap = new Map()){
  if(typeof obj !=='object' || obj === null){
    return obj
  }
  if(myMap.get(obj)){
    return myMap.get(obj)
  }
  else{
    let cloneObj = Array.isArray(obj) ? [] : {}
    myMap.set(obj,cloneObj)
    for(let key in obj){
      cloneObj[key] = deepCopy(obj[key],myMap)
    }
    return cloneObj
  }
  
}
let obj = {
  a: undefined,
  b: {
    c: function () {
      console.log(1)
    },
    d: null,
    g: NaN,
    i: 'hello',
    j: true,
    k: undefined,
    l: Date(),
    m: function sum(a,b){a+b}
  },
  h: [10, 20, 30, 40]
}
obj.a = obj //添加循环引用

//测试代码
let obj_copy = deepCopy(obj)
console.log('h:', obj_copy.h.push(50))
console.log('obj:', obj)
console.log('obj_copy:', obj_copy)
