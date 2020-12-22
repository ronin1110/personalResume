/*
 * @Description: 
 * @Author: jiangyihong
 * @Date: 2020-07-22 13:30:01
 * @LastEditors: yaolin
 */ 

const webpack = require('webpack')

module.exports = {


  publicPath: '',

  // 当运行 vue-cli-service build 时生成的生产环境构建文件的目录。
  // 注意目标目录在构建之前会被清除 (构建时传入 --no-clean 可关闭该行为)
  outputDir: 'sqtman',

  // 如果你不需要生产环境的 source map，可以将其设置为 false 以加速生产环境构建。
  productionSourceMap: false,

  integrity: false,

  configureWebpack: {  // 用于调试
    devtool: 'source-map',
  },


  configureWebpack: {
    plugins: [
      new webpack.ProvidePlugin({
        $:"jquery",
        jQuery:"jquery",
        "windows.jQuery":"jquery"
      })
    ]
  },


  devServer: {
    host: '0.0.0.0',
    port: 3000,
    hot: false,
    https: false,
    open: false,
    disableHostCheck: true,
    proxy: {
      '/api': {
        target: 'http://192.1.2.75:8088/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },

  pages: {
    manage: new PageReset('manage', '准备春招！准备春招！'), // 此处title为各系统名称，例如：协商民主
    // mobile: new PageReset('mobile', ''), // 移动端页面,常规页面
    // houseManage: new PageReset('houseManage', '房屋管理'), // 移动端房屋管理页面,常规页面
    // repair:new PageReset('repair', '我要报修'), // 我要保修
    // community: new PageReset('community', '小区信息'), // 小区信息页面
    // propertyWork:new PageReset('propertyWork', '物业实事'), // 物业实事页面
    // newsDetail:new PageReset('newsDetail', '物业实事详情页面'), // 物业实事详情页面
    // propertyPay:new PageReset('propertyPay', '物业缴费'), // 物业缴费页面
    // consult:new PageReset('consult', '语音管家'), // 原语音信箱页面，由信件页面改造
  },
}
/**
 * 页面构造器
 * @param {String} name 页面名称
 * @param {String} title 页面title
 */
function PageReset (name, title) {
  // page 的入口
  this.entry = `src/entry/${name}.js`
  // 模板来源
  this.template = 'public/index.html'
  // 在 dist/index.html 的输出
  // this.filename = `${name}.html`
  this.filename = 'index.html'
  // 当使用 title 选项时，
  // template 中的 title 标签需要是 <title><%= htmlWebpackPlugin.options.title %></title>
  this.title = title
  // 在这个页面中包含的块，默认情况下会包含
  // 提取出来的通用 chunk 和 vendor chunk。
  this.chunks = ['chunk-vendors', 'chunk-common', name]
}
