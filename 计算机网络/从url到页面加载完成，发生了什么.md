# 从url到页面加载完成，发生了什么？
## 1.浏览器根据请求的url解析出域名，再通过DNS服务，将域名转化为ip地址，向服务器发出请求。
## 2.三次握手，与服务器建立TCP连接
## 3.浏览器向服务端发送http请求
## 4.服务端响应http请求，并将HTML，CSS，JS文件返回给浏览器
## 5. 浏览器根据HTML文件生成DOM TREE，根据CSS生成Style Rule，根据DOM TREE和 Style Rule生成RENDER TREE。
## 6.布局：为每个节点分配一个在屏幕上出现的坐标
## 7. 绘制，遍历Render Tree，将节点呈现出来
## 8.载入加载到的资源文件，渲染页面
## 9.四次挥手，断开TCP连接