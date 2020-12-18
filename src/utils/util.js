/*
 * @Description: 
 * @Author: jiangyihong
 * @Date: 2020-08-10 11:15:16
 * @LastEditors: jiangyihong
 */
import Vue from 'vue'
import axios from 'axios'
import ElementUI from 'element-ui'
require('es6-promise').polyfill()
import {getLocationSearchObj} from './common.js'
const PARAMS = getLocationSearchObj()

let tk = window.localStorage.getItem('tk')
const http = axios.create({
  baseURL: window.BASEPATH, // process.env.NODE_ENV === 'production' ? window.BASEPATH : '/api',
  withCredentials: true,
  timeout: process.env.NODE_ENV === 'production' ? 2000000 : 200000, // 5000
  headers: {
    'Authorization': `Bearer ` + tk || '',
    'appId': PARAMS.appId || '',
    'orgId': PARAMS.orgId || '',
    'lesseeCode': PARAMS.lesseeCode || ''
  }
})

http.interceptors.request.use(config => {
  if (Vue.prototype.$keycloak) { // 使用到keycloak时才需要
    let tk = Vue.prototype.$keycloak.token
    if (tk && tk != '') {
      config.headers.Authorization = `Bearer ${Vue.prototype.$keycloak.token}`
    }
  }
  return config
})

// 添加响应拦截器
http.interceptors.response.use(response => {
  // 对响应数据做点什么
  // console.log('response--', response)
  // 登录失效，跳转登录
  if (response.data.code == 401) {
    window.localStorage.removeItem('tk')
    let vm = new Vue()
    vm.$keycloak.logoutFn()
    vm.$destroy()
  } else {
    return response
  }
}, error => {
  // 对响应错误做点什么
  console.log('response--', error)
  return Promise.reject(error)
})

Vue.prototype.$http = http

Vue.prototype.$post = function (url, data) {
  return new Promise((resolve, reject) => {
    http.post(url, data).then(res => {
      if (res.status == 200) {
        resolve(res.data)
      } else {
        ElementUI.Message.error(res.data.msg)
      }
    }).catch(err => {
      // ElementUI.Message.error('网络错误，请重试！')
      console.log(err)
      reject(err)
    })
  })
}

Vue.prototype.$get = function (url, params = {}) {
  return new Promise((resolve, reject) => {
    http.get(url, {
      params
    }).then(res => {
      if (res.status == 200) {
        resolve(res.data)
      } else {
        ElementUI.Message.error(res.data.msg)
      }
    }).catch(err => {
      // ElementUI.Message.error('网络错误，请重试！')
      console.log(err)
      reject(err)
    })
  })
}
