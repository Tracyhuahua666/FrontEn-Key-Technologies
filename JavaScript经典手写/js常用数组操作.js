// 数组转字符串
let arr2 = ['a', 'b', 'c']
console.log(arr2.join(''))
    // 字符串转数组
let str1 = 'abc'
console.log('str1:', str1.split('')) // [ 'a', 'b', 'c' ]
console.log('str1:', [...str1])
    // 操作数组尾部
arr2.push('d') // ['a','b','c','d']
arr2.pop() // ['a','b','c']

//操作数组头操作
// unshift在列表头部插入元素，返回插入后数组长度
let arr2_unshift_return = arr2.unshift('d')
console.log('arr2_unshift_return:', arr2_unshift_return)
console.log('arr2:', arr2)

// shift 去掉头结点
let arr2_shift_return = arr2.shift()
console.log('arr2_shift_return:', arr2_shift_return)
console.log('arr2:', arr2)

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

//数组切片,左闭右开,参数为index
console.log('arr2:', arr2)
console.log('slice:', arr2.slice(1, 2))
console.log('str2:', str2)
console.log('str slice:', str2.slice(4, 7))

//数组排列
console.log(arr2.sort())


//循环
let arr4 = [1, 2, 3, 4]
    // 数组求和，reduce
console.log(arr4.reduce((res, item) => {
    return res + item
}))

//遍历数组 map，forEach的区别

//map 处理数据并返回一个新数组
console.log('map:', arr4.map(item => item * 2))
console.log('arr4:', arr4)
    //forEach 没有返回值
console.log(arr4.forEach(item => item * 2))


arr4.forEach(function(item) {
    console.log(item)
})

//filter 过滤数据并返回一个新的数组
console.log('filter', arr4.filter(item => item % 2 === 0))