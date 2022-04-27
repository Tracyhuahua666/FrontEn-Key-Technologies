## JavaScript面向对象
###  ES5中JavaScript没有类，它是如果创建对象？
通过定义构造函数，new一个对象
```
//构造函数
function DOG(name){
　　this.name = name;
}
//基于构造函数，new一个对象
var dogA = new DOG('大毛');
var dogB = new DOG('二毛');
```
### ES5中JavaScript没有父类的概念，那如何共享属性和方法？

构造函数的prototype属性，用于解决这个问题。所有实例对象需要共享的属性和方法，都放在prototype里面；那些不需要共享的属性和方法，就放在构造函数里面。

实例对象一旦创建，将自动引用prototype对象的属性和方法。也就是说，实例对象的属性和方法，分成两种，一种是本地的，另一种是引用的。
```

DOG.prototype = { species : '犬科' };

console.log(dogA.species); // 犬科
console.log(dogB.species); // 犬科
```

