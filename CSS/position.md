# CSS 的position 常用值 
static，absolute，relativate，fixed，
## static：
 默认值， 流式布局，没有left，right，top，bottom
## relativate：
相对static位置的偏移，多出left,right,botton,top 控制位置
## absolute：
绝对定位，从父元素开始计算的偏移位置
若为：relativate+absolute：
absolute是在relativate基础上偏移位置
若有滚动条，跟随滚动条移动
## fixed
不随滚动条移动的绝对定位
## sticky
开始随滚动条滚动，当元素到达指定top位置后，不再岁滚动条滚动