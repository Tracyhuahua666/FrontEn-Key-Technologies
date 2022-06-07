## 1.Vuex是为vue开发的状态管理模式
## 2.vuex五大核心属性：state，mutation，getters，actions，module

## state：
用于存储数据，存储状态；在根实例中注册了store 后，用 this.$store.state 来访问对应vue里面的data；存放数据方式为响应式，如state中数据发生变化，组件也会对应的更新。

## mutation：
更改 Vuex 的 store 中的状态的唯一方法是提交 mutation。
修改state的方法,this.$store.commit('方法名', 可选参数)进行调用

## getters：
可以认为是 store 的计算属性，它的返回值会根据它的依赖被缓存起来，且只有当它的依赖值发生了改变才会被重新计算。
this.$store.getters.方法名(可选参数) 

## actions：
包含任意异步操作，通过提交 mutation 间接更变状态。
this.$store.dispatch('方法名',可选参数)

## module：
将 store 分割成模块，每个模块都具有state、mutation、actions、getters、甚至是嵌套子模块。