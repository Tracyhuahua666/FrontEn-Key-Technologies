//按照指定深度进行数组扁平化，若不指定深度，去掉deep参数
//写法1
// function flatten1(arr,deep){
//     var result = []
//     if (Array.isArray(arr)===false||deep===0){
//         result.push(arr)
//         return result
//     }
//     else{
//         arr.forEach(item => {
//             result=result.concat(flatten1(item,deep-1))
//         });
//         return result;
//     }
// }
// console.log(flatten1([[[3,'qqq']],1],3))
// //写法2
// function flatten2(arr,result,deep){
//     if(!Array.isArray(arr)){
//         result.push(arr);
//         return;
//     }
//     arr.forEach(item=>{
//         flatten2(item,result,deep-1)
//     })
// }
// let result =[]
// flatten2([[[3,'qqq']],1],result,3)
// console.log(result)

// 写法3
var flatten = function(arr) {
    let result = []

    function flat(arr) {
        if (Array.isArray(arr) === false) {
            result.push(arr)
            return
        }
        for (let i = 0; i < arr.length; ++i) {
            flat(arr[i])
        }
    }
    flat(arr)
    return result
}

let arr1 = flatten([
    [
        [3, 'qqq']
    ], 1
])
console.log(arr1)