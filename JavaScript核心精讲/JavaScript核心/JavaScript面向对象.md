## JavaScript面向对象
### JavaScript没有类，它是如果创建对象？
定义构造函数，new一个对象
```
//构造函数
function person(name,age){
  this.name = name;
  this.age = age;
}
//基于构造参数，
person1 = new person('Lily',7)
```
### JavaScript没有父类的概念，那person的实例对象
