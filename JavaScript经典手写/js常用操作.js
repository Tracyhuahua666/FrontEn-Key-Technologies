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

// 字符串逆转: 先拆分成数组，再逆转，再连接
let str = 'abc'
console.log(str.split('').reverse().join(''))
let str2 = 'www.baidu.com'
console.log(str2.split('.').reverse().join('.'))

// 数组中是否包含某个元素 array.includes(X)
console.log(arr2.includes('a'))

// 数组中某个元素第一次出现的位置array.indexOf(X)
console.log(arr2.indexOf('a'))

//数组排列
console.log(arr2.sort()) 

// 数组求和
console.log(sum([1,2]))