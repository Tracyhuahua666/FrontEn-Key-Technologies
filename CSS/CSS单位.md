# CSS单位
1. px 像素
2. em 表示相对父元素来说的倍数关系，例如父元素10px，子元素2em，换算出来就是20px
3. rem == root em 表示相对根元素的倍数关系，使用rem可以避免元素嵌套过分导致倍数关系的混乱
4. vh，vw 值为1-100，表示百分比，v即是view，vh == view high,vw == view width,1-100是指百分比，50vh是指窗口高度的50%
5. vmin，vmax  vmin指视窗比较短的那边的长度，vmax是指视窗比较长的那边的长度，常与css 的@media，适配屏幕旋转（横屏或竖屏）带来的变化