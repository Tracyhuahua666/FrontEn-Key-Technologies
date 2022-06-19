##  1.id选择器，类选择器，标签选择器
### id 选择器
```
#id {}
```
### 类选择器
```
.class{}
```
### 标签选择器
```
body{

}
```
## 2.伪类选择器
```
a:link{
    line-decration：none 不显示下划线
} 链接没有访问过的样式
a:visited{} 链接访问后的样式
a:hover{} 鼠标滑过链接的样式
a:active{} 鼠标按下时的样式

input:foucus{}
```
## 3. 复合选择器（后代选择器）
```
ul li{
    color: red;
}
```
## 4.子元素选择器（选择最近一级的子元素）
```
ul>li{
    color: red;
}
```
## 5.并集选择器（用逗号隔开，多个标签，集体声明）
```
#mydiv1,
#mydiv2{
    color: red;
}
```