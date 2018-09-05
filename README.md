# Branch react-redux-ver
react-redux重构了评论功能

### component
存放Dumb组件，可以复用。全局状态comments的读取，从localStorage存取数据需要用Smart组件来完成。

### contaier
存放针对不同Component的Smart组件，使用高阶组件为Dumb组件添加props，使得其可以更新全局状态。并且帮助Dumb组件读取localStorage进行数据操作

### reducer
负责分发action
定义了action.type 和action creator

### index.js
创建store
用Provider作为状态树的根，用props的形式让子孙节点访问store。