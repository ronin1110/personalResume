/*
 * @Description: 爱龙游app授权，获取用户信息等
 * @Author: jiangyihong
 * @Date: 2020-07-31 22:10:34
 * @LastEditors: yaolin
 */
import Vue from 'vue'

export function ytAppAuth () {
  const vm = new Vue()
  return new Promise((resolve, reject) => {
    // 开发自用，可用于PC端浏览器端查看
    if (process.env.NODE_ENV !== 'production') {
      // vm.$http.defaults.headers['userId'] = 'cD2tCe/ck+EtzAknEzZSSw=='
      vm.$http.defaults.headers['userId'] = 'FT4H5JzyyNQ3o8XKyh8MSw=='
      vm.$destroy()
      resolve({
        userInfo: {"isAuth":1,"mobile":"13957144315","originId":"","userId":"FT4H5JzyyNQ3o8XKyh8MSw==","userName":"sscat","code":200,"message":"success"},
        area: {"countryId":"1ULEVhN66wl9zsHfR/uRndveoci2wDcHFP9tPTOjV9s=","isBind":0,"streetId":"A4r3Kw6F7dARBJyYrh4tvURl2geeel4YEnVUc0PFsAQ=","vukkageUd":"10079","code":200,"message":"success"}
      })
      return
    }

    // 需嵌入app中获取对应数据
    Promise.all([getAreaInfo(), getUserInfo()]).then(res => {
      let obj = {
        area: res[0],
        userInfo: res[1]
      }
      vm.$http.defaults.headers['userId'] = res[1].userId
      vm.$destroy()
      resolve(obj)
    }).catch(err => {
      alert('网络错误，请重新加载!')
      console.log(err)
      reject(err)
    })
  })
}

// 获取区划信息
function getAreaInfo () {
  return new Promise((resolve, reject) => {
    window.yt.getAreaInfo({
      success: function (data) {
        // let img = new Image()
        // img.src = 'getAreaInfo' + JSON.stringify(data)
        resolve(data)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}

// 获取用户信息
function getUserInfo () {
  return new Promise((resolve, reject) => {
    window.yt.getUserInfo({
      success: function (data) {
        // let img = new Image()
        // img.src = 'getUserInfo' + JSON.stringify(data)
        resolve(data)
      },
      error: function (err) {
        reject(err)
      }
    })
  })
}
