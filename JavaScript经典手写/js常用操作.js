// 数组转字符串
let arr2 = ['a','b','c']
console.log(arr2.join(''))
// 字符串转数组
let str1 = 'abc'
console.log('str1:', str1.split('')) // [ 'a', 'b', 'c' ]
console.log('str1:',[...str1])
// 操作数组
arr2.push('d')
console.log('push',arr2)
arr2.pop()
console.log('pop:',arr2)
arr3 = arr2.reverse()
console.log('reverse:',arr3)