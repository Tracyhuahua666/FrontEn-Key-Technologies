// some() 方法用于检测数组中的元素是否满足指定条件（函数提供）。

// some() 方法会依次执行数组的每个元素：

// 如果有一个元素满足条件，则表达式返回true , 剩余的元素不会再执行检测。
// 如果没有满足条件的元素，则返回false。
// 注意： some() 不会对空数组进行检测。

// 注意： some() 不会改变原始数组。

var arr = [3, 6, 9, 12];

console.log(arr.some(function checknumber(number) { return number == 12; }))

//true 因为arr数组中有12的值，所以代码块会执行，而函数checknumber中传的参数number是从数组arr中读取





// JS中除了some()还有every()方法，与some()方法相反

// every() 方法用于检测数组所有元素是否都符合指定条件（通过函数提供）。

// every() 方法使用指定函数检测数组中的所有元素：

// 如果数组中检测到有一个元素不满足，则整个表达式返回 false ，且剩余的元素不会再进行检测。
// 如果所有元素都满足条件，则返回 true。
// 注意： every() 不会对空数组进行检测。

// 注意： every() 不会改变原始数组。

var arr = [13, 15, 9, 12];
console.log(arr.every(function checknumber(number) { return number > 10; }))
    // false 因为9小于10，不满足每个数都大于10