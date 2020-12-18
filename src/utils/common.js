// 获取地址栏url参数并对象化
export function getLocationSearchObj () {
  var search = location.search.substring(1)
  if (!search && location.href.lastIndexOf('?') > -1) {
    search = location.href.substring(location.href.lastIndexOf('?') + 1)
  }
  var obj = {}
  if (search.length > 0) {
    var arr = [], item
    arr = search.split('&')
    for (var i = arr.length; --i >= 0;) {
      item = arr[i].split('=')
      obj[item[0]] = item[1]
    }
  }
  return obj
}

// 校验身份证
export function judgeIdCard (val) {
  let bool = false
  let reg = /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}$)/
  if (reg.test(val)) {
    bool = true
  }
  return bool
}

/* 
 * 只允许输入数字和. 用于处理一些金额 xxxx.xx
 * @param {Number | String} val 需要限制的内容
 * @param {Number} max 整数部分最大值 比如四位数：9999
 * @param {Number} num 是否有小数点，如果有小数点则为小数的最大数 比如两位小数: 99
 */
export function numberLimit (val, max, num) {
  val = val.toString()
  val = val.replace(/。/g, '.')
  // 没有小数
  if (!num) {
    val = val.replace(/[^0-9]/g, '')
    val = val > max ? max : val * 1
  } else { // 有小数时限制
    val = val.replace(/[^0-9.]/g, '')
    let list = val.split('.')
    let a = list[0]
    if (list.length > 1) {
      let b = list[1]
      a = a > max ? max : a * 1
      b = b > num ? num : b.toString().slice(0, 2)
      val = (a || 0) + '.' + b
    } else {
      a = a > max ? max : (a === '' ? a : a * 1)
      val = a
    }
  }
  return val
}
