/*
 * @Description: 
 * @Author: zhang_weidie
 * @Date: 2020-06-17 20:51:08
 */ 
import Vue from 'vue'
const dayjs = require('dayjs')
const weekday = require('dayjs/plugin/weekday')
dayjs.extend(weekday)


Vue.prototype.$timeFormat = timeFormat

Vue.filter('timeFormat', val => {
  if (val) {
    val = timeFormat('YYYY-MM-DD HH:mm:ss', val)
  }
  return val
})
// 保修工单受理状态 0待受理 1取消受理 2已受理 3已完成 4不受理
Vue.filter('stateFormat', val => {
  if (val == 0) {
    val = '待受理'
  } else if (val == 1) {
    val = '已取消'
  } else if (val == 2) {
    val = '已受理'
  } else if (val == 3) {
    val = '已完成'
  } else if (val == 4) {
    val = '不受理'
  }
  return val
})
// 用户类型 1:业主 2;家庭成员 3;租户
Vue.filter('userTypeFormat', val => {
  if (val == 1) {
    val = '业主'
  } else if (val == 2) {
    val = '家庭成员'
  } else if (val == 3) {
    val = '租户'
  }
  return val
})
// 缴费状态 0：未缴费 1：已缴费
Vue.filter('payFormat', val => {
  if (val == 0) {
    val = '待缴费'
  } else if (val == 1) {
    val = '已缴费'
  }
  return val
})
//用于计算input输入框中英文字母的的长度
export function validateTextLength(value) {
  // 中文、中文标点、全角字符按1长度，英文、英文符号、数字按0.5长度计算
  let cnReg = /([\u4e00-\u9fa5]|[\u3000-\u303F]|[\uFF00-\uFF60])/g;
  let mat = value.match(cnReg);
  let length;
  if (mat) {
    length = mat.length + (value.length - mat.length) * 0.5;
    return length;
  } else {
    return value.length * 0.5;
  }
}
// 用于格式化时间格式，format:YYYY-MM-DD HH:mm:ss, date日期
export function timeFormat (format, date) {
  if (date === undefined) {
    date = new Date()
  }
  return dayjs(date).format(format)
}

/**
 * 构造函数，用于过滤暂无内容的obj里的key
 * @params {Object} obj 需要处理的obj
 */
Vue.prototype.$FormatData = function (obj) {
  for (let key in obj) {
    if (obj[key] || obj[key] === 0) {
      this[key] = obj[key]
    }
  }
}

// 生成唯一标识
Vue.prototype.getGUId = function (len, radix) { // 生成唯一标识 len:长度 默认8 radix:进制 默认10
  var len = len || 8;
  var radix = radix || 16;

  var chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'.split('');
  var uuid = [],
      i;
  radix = radix || chars.length;

  if (len) {
      // Compact form
      for (i = 0; i < len; i++) uuid[i] = chars[0 | Math.random() * radix];
  } else {
      // rfc4122, version 4 form
      var r;

      // rfc4122 requires these characters
      uuid[8] = uuid[13] = uuid[18] = uuid[23] = '-';
      uuid[14] = '4';

      // Fill in random data. At i==19 set the high bits of clock sequence as
      // per rfc4122, sec. 4.1.5
      for (i = 0; i < 36; i++) {
          if (!uuid[i]) {
              r = 0 | Math.random() * 16;
              uuid[i] = chars[(i == 19) ? (r & 0x3) | 0x8 : r];
          }
      }
  }
  return uuid.join('');
}

// 去除前后空格
Vue.prototype.handleTrim = function (str) {
  if (!str) {
    return str
  }
  return str.replace(/(^\s*)|(\s*$)/g, '')
}
/*时间格式化*/
Date.prototype.Format = function (fmt) { //author: meizz
  var o = {
      "M+": this.getMonth() + 1, //月份
      "d+": this.getDate(), //日
      "h+": this.getHours(), //小时
      "m+": this.getMinutes(), //分
      "s+": this.getSeconds(), //秒
      "q+": Math.floor((this.getMonth() + 3) / 3), //季度
      "S": this.getMilliseconds() //毫秒
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
      if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}