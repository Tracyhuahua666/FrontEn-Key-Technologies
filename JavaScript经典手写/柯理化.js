

function curry(fn){
    let parmas = []
    return function sum(...args){
        if(args.length){//判断是否有参数
            parmas = [...parmas,...args]
            return sum
        }
        return fn(parmas)
    }
}
function add(arr){
   return arr.reduce((acc,item)=>{
        return acc+item
    })
}
 
let curried = curry(add)
console.log(curried(1)(2)(3)(4)(10,20)())//40
// 注意最后的调用用方式，()调用不传递参数，会跳出判断，调用累加函数