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

//操作数组头操作
// unshift在列表头部插入元素，返回插入后数组长度
let arr2_unshift_return = arr2.unshift('d')
console.log('arr2_unshift_return:',arr2_unshift_return)
console.log('arr2:',arr2)

// shift 去掉头结点
let arr2_shift_return = arr2.shift()
console.log('arr2_shift_return:',arr2_shift_return)
console.log('arr2:',arr2)

// 逆转数组
arr3 = arr2.reverse()
