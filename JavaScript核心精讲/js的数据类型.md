## js的数据类型
基本数据类型：
Number，String，null，undefined，boolean
存储在栈中，先进后出，存储空间有限，不能对变量的生命周期进行管理

引用数据类型
Object，Array，Function
存储在堆中，便于对变量的生命周期进行管理。
垃圾回收：引用计数法，标记清除法

## 判断数据类型的方法
1. typeof 变量名 ：除了null，可以识别其它基本数据类型。对应引用的数据类型，返回Object

2. a instanceof A: instanceof 运算符用于它用来判断这个构造函数的原型是否在给定对象的原型链上。可以用于检测Object，Function，Array
3. Object.prototype.toString.call()
