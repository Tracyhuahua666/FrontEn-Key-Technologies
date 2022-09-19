## JavaScript的继承
ES5中JavaScript是没有父类的，那如何让不同的实例对象共享方法并且传递参数？

它可以通过call，apply，bind 实现类似的功能

以下例子：创建一个人的实例对象，但是不同的人，有不同的名字，年龄和爱好，就可以使用call，apply，bind方法实现。

call，apply，bind改变了this的指向，第一个参数为this指向的对象。

call与apply的区别：apply除第一个参数之外，其它参数需要以数组的形式传入。

bind与call，apply的区别是：调用call之后不会直接调用函数，而是返回函数指针。适用于浏览器对事件监听，当监听到某个事件，才调用函数。
```
let person1={
    sport: 'swimming'
}
let person2={
    sport: 'pingpong'
}
function personInfo(myName,age){
    console.log(myName)
    console.log(age)
    console.log('I like '+ this.sport)
}

personInfo.call(person1,'LiLy',7)
personInfo.call(person2,'Ben',10)

personInfo.apply(person1,['LiLy',7])

f1 = personInfo.bind(person1,'LiLy',7)
f1()
```
### call的实现
```
Function.prototype._call = function(context) {
    var context = context || window
    console.log('this:',this)
    // 首先要获取调用call的函数，用this可以获取
    context.tempfn = this;//this指向的是使用call方法的函数(tempfn为临时创建的函数变量，把调用函数赋值到这个临时变量中，最后这个属性是要被删除的)
    args = [...arguments].slice(1)
    context.tempfn(...args);
    delete context.tempfn;
}
```
### apply的实现
```
Function.prototype._apply = function(context, arr) {
    // 如果context不传,this就默认绑定到window
    const ctx = context || window;
    // 这里this指调用函数
    ctx.tempfn = this;
    // 这里参数为数组
    const res = ctx.tempfn(...arr);
    delete ctx.fn;
    return res;
}
```
### bind的实现

```
Function.prototype._bind=function(context, ...args1){
    const fn = this; // 这里的 this 就是调用 bind 的函数 func
    
    return function (...args2) {
        console.log('arr1:',[...args1,...args2])
      return fn.apply(context, [...args1,...args2]);
    };
};
```
