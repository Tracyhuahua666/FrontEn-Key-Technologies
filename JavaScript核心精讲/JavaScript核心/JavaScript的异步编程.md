## JavaScript的异步编程发展与应用


### 为什么需要异步编程？

#### JavaScript是单线程的
JavaScript是作为浏览器的脚本语言，主要是实现用户与浏览器的交互，以及操作dom；这决定了它只能是单线程，否则会带来很复杂的同步问题。 举个例子：如果js被设计了多线程，如果有一个线程要修改一个dom元素，另一个线程要删除这个dom元素，此时浏览器就会一脸茫然，不知所措。所以，为了避免复杂性，从一诞生，JavaScript就是单线程。

#### 单线程带来的问题

当页面要发一个HTTP请求的时候，因为JavaScript是单线程的，所以在请求返回结果之前，用户不能对页面做其它操作，这样的设计显然非常影响用户体验。于是引入了**异步编程**，即是浏览器把请求发出去之后，不需要原地等待返回，就可以处理其它内容，异步请求结果返回之后，再对请求的结果进行处理。

### ES6提出的异步编程的解决方案--Promise

Promise是异步编程的一种解决方案。也可以说Promise是一个容器，里面保存着某个未来才会结束的事件（通常是一个异步操作）的结果。

#### Promise的状态转换
Promise有三种状态：**pending（进行中）、fulfilled（已成功）和rejected（已失败）**。Promise对象的状态改变，只有两种可能：从pending变为fulfilled和从pending变为rejected。只要这两种情况发生，状态就凝固了，不会再变了，会一直保持这个结果，这时就称为 resolved（已定型）。


**Promise构造函数**接收一个函数作为参数，该函数的两个参数是resolve，reject，它们由JavaScript引擎提供。**resolve函数**的作用是当Promise对象的状态变为成功时,调用回调的数据结果作为其参数传递出去；**reject函数**的作用是单Promise对象的状态变为失败时，将操作报出的错误作为其参数传递出去。如下面的代码：

```
function run(num){
  var p1 = new Promise(function(resolve,reject){
    setTimeout(()=>{
      if (num>100){
        resolve(num)
      }
      else{
        reject('error')
      }
    },2000)
  })
  return p1
}
myPromsie = run(60)

```
调用run函数，返回一个Promise对象，而setTimeout(要执行的代码, 等待的毫秒数)为一个异步函数，例子中表示2000毫秒后执行num的判断，由于使用了Promise，调用这个函数后，开始计时2000毫秒，而且这2000毫秒里面，js可以处理其它的事件。

### 如何对异步请求返回的结果进行处理？

#### 单独使用Promise的then()方法：
我们只需要在 .then() 中添加两个function就好了，第一个是用来处理成功的情况。第二个是用来处理失败的情况。一般用于希望捕获异常后，不影响接下里Promise的执行。

```
myPromsie.then(
  v=>{console.log(v)},
  v=>{console.log(v)})//''error

```
#### 使用Promise的then()方法和catch()方法：
.then()用于处理成功的情况，.catch()用于捕获失败的情况。一般用在，当一个Promise发生了异常，剩下的Promise都不在执行。

```
myPromsie.then(
v=>{console.log(v)
  return v}).
  then(v=>{console.log(v+2)})//不会执行
  .catch(v=>{console.log(v)})//捕获异常

```

### 如何让一系列的异步请求有序发生？
#### Promise的链式调用
链式调用：指在当前promise达到fulfilled状态后，即开始进行下一个Promise
链式调用的原理：每个then都返回一个新的promise，返回的新的promsie会在上一个promise的状态变更改时候开始执行。
```
promise.
myPromsie = run(160)
myPromsie.then(v=>{
  console.log(v)//160
  return v
}).then(v=>{
  v += 2
  console.log(v)//162
  return v
}).then(v=>{
  v += 2
  console.log(v)//164
  return v
}).
catch(v=>{
  console.log(v)//捕获异常
})

```
### 如何同时发多个Promise异步请求？
Promise的all方法和race方法提供了并行执行异步操作的能力，在all中所有异步操作结束后才执行回调，在race中，任意异步操作结束即可返回结果。

```
function getp1() {
    let p1 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('this is p1')
        },1000)
    })
    return p1
}
function getp2() {
    let p2 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('this is p2')
        },2000)
    })
    return p2
}
function getp3() {
    let p3 = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('this is p3')
        },3000)
    })
    return p3
}

Promise.all([getp1(),getp2(),getp3()]).then((data)=>{console.log(data)})
//[ 'this is p1', 'this is p2', 'this is p3' ]

Promise.race([getp1(),getp2(),getp3()]).then((data)=>{console.log(data)})
//this is p1
```

### ES7提出的异步方案---async 函数
async表示函数里有异步操作，await表示紧跟在后面的表达式需要等待结果。异步的代码，同步的写法。逻辑更加清晰。

```
function getData(){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            var name = "syy";
            resolve(name)
        },3000)
    })
}
// async await 异步方案
async function test(){
    var p = await getData();
    console.log(p);
};
test(); //syy

// Promise 异步方案
p1 = getData().then((data)=>{console.log(data)}) //syy
```

