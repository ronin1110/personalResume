/*
 * @Description: 
 * @Author: jiangyihong
 * @Date: 2020-08-10 09:22:26
 * @LastEditors: yaolin
 */
import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

const routes = [
  // {
  //   // path: '/maiList',
  //   // redirect: '/maiList/zheZhengHall',
  //   // component: () => import('@/views/permissions/index.vue'),
  //   // children: [
  //   //   {
  //   //     path: 'roleList',
  //   //     name: 'roleList',
  //   //     component: () => import('@/views/permissions/roleList.vue')
  //   //   },
  //   //   {
  //   //     path: 'zheZhengHall',
  //   //     name: 'zheZhengHall',
  //   //     component: () => import('@/views/permissions/zheZhengHall.vue')
  //   //   }
  //   // ]
  // },
  {
    path: '/403',
    component: () => import('../views/Manage.vue')
  },
  // {
  //   path: '*',
  //   redirect: '/dataManage'
  // }
]

const router = new VueRouter({
  routes,
})

export default router
