// 数组转字符串
let arr2 = ['a','b','c']
console.log(arr2.join(''))
// 字符串转数组
let str1 = 'abc'
console.log('str1:', str1.split('')) // [ 'a', 'b', 'c' ]
console.log('str1:',[...str1])
// 操作数组尾部
arr2.push('d') // ['a','b','c','d']
arr2.pop() // ['a','b','c']

//操作数组结尾
arr1.push() 

// 逆转数组
arr3 = arr2.reverse()
