# JavaScript变量简介
## JavaScript变量的基本类型
基本数据类型：
Number，String，null，undefined，loolean
存储在栈中，先进后出，存储空间有限，不能对变量的生命周期进行管理

引用数据类型
Object，Array，Function
存储在堆中，便于对变量的生命周期进行管理。
垃圾回收：引用计数法，标记清除法
### Null：空对象的引用
```
typeof Null // object
```
### Undefined：变量已声明但未赋值
```
typeof Undefined //Undefined
```
## ES新增的数据类型Symbol和Bigint

### Symbol： 
代表独一无二的值，最大的用法是用来定义对象的唯一属性名。
### BigInt ：
可以表示任意大小的整数。

## 查看基本数据类型的方法- typeof
```
总结：引用型数据除了function，其它都查不到，普通类型，除了null都可以
console.log(typeof undefined); // undefined
console.log(typeof 2); // number
console.log(typeof true); // boolean
console.log(typeof "str"); // string
console.log(typeof Symbol("foo")); // symbol
console.log(typeof 2172141653n); // bigint
console.log(typeof function () {}); // function
//不能查看对象的具体原型
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); // object

```
## 查看具体数据类型的方法:Object.prototype.toString.call(myobj)
```
Object.prototype.toString.call(2); // "[object Number]"
Object.prototype.toString.call(""); // "[object String]"
Object.prototype.toString.call(true); // "[object Boolean]"
Object.prototype.toString.call(undefined); // "[object Undefined]"
Object.prototype.toString.call(null); // "[object Null]"
Object.prototype.toString.call(Math); // "[object Math]"
Object.prototype.toString.call({}); // "[object Object]"
Object.prototype.toString.call([]); // "[object Array]"
Object.prototype.toString.call(function () {}); // "[object Function]"
```
## 其它常用方法
### 判别数组： Array.isArray(obj)


