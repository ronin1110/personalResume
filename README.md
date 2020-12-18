# lyt-screen-manage

> 该项目为龙游通应用的通用模板，新增应用时可直接复制过去，直接搭建，然后修改package.json中项目名称，然后应用有对应的修改地方，也需要同步到模板项目中，方便后续维护

#### 常规的通用维护组件或模块

```js
// 1.菜单组件
components/CustomMenu.vue
// 2.通用标题组件(从steplink复制而来)
components/common/CommonTitle.vue
// 3.页面布局组件(从steplink复制而来)
components/commonCustomLayout.vue
// 4.行政区划选择组件
components/AreaSelect.vue
// 5.组织架构&&用户角色相关页面，用到了store状态维护
views/permissions/xxx(改目录下所有)
store/store.js
utils/eventBus.js
// 6/通用的css
utils/base.css
utils/basic.css
utils/reset.css
// 7/axios数据请求
utils/util.js
// 8.认证授权模块
utils/basicsAuth.js(通用短信，扫码登录认证)
utils/ddApi.js(钉钉api调用，暂时只有部分)
utils/ddAuth.js(钉钉免登授权)
utils/ytAppAuth.js(爱龙游app获取用户信息)
utils/yunting-jssdk.2.0.0.js(jssdk与爱龙游app交互文件)


```

