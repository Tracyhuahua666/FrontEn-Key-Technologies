## 基本概念
### 工作区：编辑文件的地方
### 暂存区：数据暂存的地方
```
git add .
```
### 版本库： 存放在暂存区的数据push
``` 
git push origin master
```
### 查看当前分支
```
git branch
```
### 创建并切换分支
```
git checkout branchname
```
### 基本操作
```
先把代码提交到暂存区
(dev) git add .
(dev) git commit -m 'XXX'
切换到master分支
(dev) git checkout master
先更新,再上传
(master) git pull
(master) git merge dev
(master) git push
```
### 冲突
以vscode为例，先协商使用哪个版本，再修改提交

 
