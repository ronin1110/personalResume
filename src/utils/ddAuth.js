import * as dd from 'dingtalk-jsapi'
import {basicsAuth} from '@/utils/basicsAuth.js'
import Vue from 'vue'

// 判断是否在钉钉环境
function isInDingTalk () {
  if (dd.env.platform !== 'notInDingTalk') {
    // 进行钉钉登录操作
    return true
  }
  return false
}

// 钉钉授权，获取code，再获取用户信息
export function ddAuth () {
  return new Promise((resolve, reject) => {
    const vm = new Vue()
    if (isInDingTalk()) {
      dd.ready(function() {
        // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
        dd.runtime.permission.requestAuthCode({
            corpId: window.CorpId,
            onSuccess: function (info) {
              vm.$get(window.AUTHPATH + '/dingTalk/getUserInfoByAuthCode', {authCode: info.code}).then(res => {
                // alert('dd onSuccess: ' + JSON.stringify(res))
                vm.$http.defaults.headers['userId'] = res.data.userId
                vm.$destroy()
                if (res.code === 200) {
                  resolve(res.data)
                } else {
                  reject(res)
                }
              }).catch(err => {
                reject(err)
              })
            },
            onFail : function (err) {
              reject(err)
              // alert('dd err: ' + JSON.stringify(err))
            }
      
        })
      })
      dd.error(function (err) {
        reject(err)
        // alert('dd error: ' + JSON.stringify(error));
      })
    } else {
      // 非钉钉环境，使用手机号验证码登录形式
      basicsAuth().then(res => {
        resolve(res)
      })
      // // 非钉钉环境下，则给与提示，为了便于开发，在开发环境时直接设置为固定数据
      // if (process.env.NODE_ENV !== 'production') {
      //   let obj = {"originId":1,"userId":"200706F45C8DB169","userAccount":null,"userName":"蒋宜宏","avatar":"","mobile":"13957144315","email":"","active":true,"admin":true}
      //   vm.$http.defaults.headers['userId'] = obj.userId
      //   resolve(obj)
      // } else {
      //   resolve(false)
      // }
    }
  })
}
