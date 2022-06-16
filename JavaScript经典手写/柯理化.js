

// function curry(fn){
//     let parmas = []
//     return function sum(...args){
//         console.log('...args:',...args)
//         console.log('parmas:',parmas)
//         if(args.length){//判断是否有参数
//             parmas = [...parmas,...args]
//             return sum
//         }
//         return fn(parmas)
//     }
// }
// function add(arr){
//    return arr.reduce((acc,item)=>{
//         return acc+item
//     })
// }
 
// let curried = curry(add)
// console.log(curried(1)(2)(3)(4)(10,20)())//40
// 注意最后的调用用方式，()调用不传递参数，会跳出判断，调用累加函数

const sum = function(a){
    return function(b){
        return a+b
    }
}
Object.defineProperties
// const sum1 = sum(1)
// console.log(sum2(3))