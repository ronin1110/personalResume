/*
 * @Author: ronin769
 * @Date: 2020-07-22 13:33:54
 * @LastEditors: yaolin
 * @LastEditTime: 2020-12-20 16:09:54
 * @Description: file content
 * @FilePath: \democracy-manage\src\entry\manage.js
 */ 
import Vue from 'vue'
import $ from 'jquery'
import App from '../views/Manage.vue'

import AOS from "aos";
import "../../node_modules/aos/dist/aos.css";

// import '@/utils/base.css'
// import '@/utils/util.js'
// import '@/utils/extend.js'
// import '@/utils/directives.js'
import store from '@/store/store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import '@/assets/fonts/iconfont.css'
// import '@/entry/permission'//路由跳转验证，接口好了时去掉注释
import router from '@/router/manage.js'
import {loadding} from '../utils/dialogUtils'
import VueClipboard from 'vue-clipboard2'
VueClipboard.config.autoSetContainer = true // add this line

Vue.use(VueClipboard)
Vue.use(AOS);
AOS.init()
Vue.mixin(loadding)
Vue.use(ElementUI, {
  size: 'small'
})

Vue.config.productionTip = false
import Router from 'vue-router'
const routerPush = Router.prototype.push
Router.prototype.push = function push(location) {
return routerPush.call(this, location).catch(error=> error)
}


new Vue({
  data () {
    return {
      USER: {"originId":1,"userId":"200706F45C8DB169","userAccount":null,"userName":"蒋宜宏","avatar":"","mobile":"13957144315","email":"","active":true,"admin":true}
    }
  },
  router,
  store,
  $,
  render: h => h(App)
}).$mount('#app')