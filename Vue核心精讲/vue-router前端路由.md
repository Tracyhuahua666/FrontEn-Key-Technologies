# vue-router原理
## 什么是后端路由？
后端根据用户请求的url，返回具体的html页面；每跳转到不同的URL，都是重新访问服务，然后服务端返回页面。
## 什么是前端路由？
vue的单页面应用单一页面应用程序，它在加载页面时，不会加载整个页面，而是只更新某个指定的容器中内容。而在指定容器中加载哪个组件的内容就由前端路由决定。
## 前端路由的原理
vue-router有两种路由模式：hash模式和history模式

### hash模式
hash是URL中#及后面的那部分，常用作锚点在页面内进行导航。

改变URL中的hash部分，触发onhashchange事件，然后根据hash值加载对应的组件。
### history模式
使用的浏览器的 history API，pushState 和 replaceState。通过调用 pushState 操作浏览器的 history 对象，改变当前地址，同时结合window.onpopstate 监听浏览器的返回和前进事件，同样可以实现无刷新的跳转页面。replaceState 与 pushStete 不同的就是，前者是替换一条记录，后者是添加一条记录。



