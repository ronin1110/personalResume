/*
 * @Author: zhang_weidie
 * @LastEditors: zhang_weidie
 * @Date: 2020-07-23 15:39:09
 * @Description: 自定义指令
 */
import Vue from 'vue'
//input textarea 去除前后空格，失焦的时候trim()
Vue.directive('trim', {
  bind: function(el, binding, vnode) {
    const element =
      el.getElementsByTagName('input')[0] ||
      el.getElementsByTagName('textarea')[0]
    element.addEventListener('blur', function() {
      vnode.data.model.callback(element.value.trim())
    })
  },
})
