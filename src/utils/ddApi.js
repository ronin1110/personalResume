// 该文件为调用钉钉的常规api
import * as dd from 'dingtalk-jsapi'

// 判断是否在钉钉环境
function isInDingTalk () {
  if (dd.env.platform !== 'notInDingTalk') {
    // 进行钉钉登录操作
    return true
  }
  return false
}

// 设置文档title
export function setDocTitle (title) {
  if (isInDingTalk()) {
    dd.ready(function() {
      // dd.ready参数为回调函数，在环境准备就绪时触发，jsapi的调用需要保证在该回调函数触发后调用，否则无效。
      dd.biz.navigation.setTitle({
        title : title, // 控制标题文本，空字符串表示显示默认文本
        onSuccess : function(result) {
        },
        onFail : function(err) {
        }
      })
    })
  } else {
    document.title = title
  }
}

