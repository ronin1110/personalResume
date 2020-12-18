import Vue from 'vue'
import VueKeyCloak from '@dsb-norge/vue-keycloak-js'

export function basicsAuth () {
  return new Promise((resolve, reject) => {
    let userInfo = {}
    let vm = new Vue()
    Vue.use(VueKeyCloak , {
      init: {
        onLoad: 'login-required'
      },
      config: {
        url: window.OIDCPATH,
        realm: window.REALM,
        clientId: window.CLIENTID,
        logoutRedirectUri: window.location.href.split('#')[0]
      },
      onReady: keycloak => {
        keycloak.updateToken()
        window.localStorage.setItem('tk', keycloak.token)
        vm.$http.defaults.headers['Authorization'] = `Bearer ` + keycloak.token
        keycloak.loadUserProfile().success(data => {
          userInfo = Object.assign(userInfo, data)
          let unionObj = data.attributes.authInfo[0]
          let type = data.attributes.authType[0]
          let unionId = JSON.parse(unionObj).unionid
          getUserInfo(unionId, type)
        })
      },
      onInitError: err => {
        console.log('---------', err)
      }
    })
    // 根据unionId获取用户信息
    function getUserInfo (unionId, type) {
      let data = {
        thirdUserId: unionId,
        thirdUserType: type
      }
      vm.$get(window.BASEAPI + '/user/getUserInfo', data).then(res => {
        if (res.data) {
          vm.$http.defaults.headers['userId'] = res.data.userId
          vm.$destroy()
          if (res.code === 200) {
            userInfo = Object.assign(userInfo, res.data)
            resolve(userInfo)
          }
        } else {
          resolve({})
        }
      }).catch(err => {
        console.log(err)
        vm.$destroy()
        reject(err)
      })
    }
  })
}
