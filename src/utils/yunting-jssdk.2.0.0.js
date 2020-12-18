!(function(win, doc){
	var iosWebviewHasReady = false
	win._iosWebviewReadyCallback = function () {
		iosWebviewHasReady = true
		if (myBridge.fnList.length) {
			myBridge.fnList.forEach(function (fn) {
				myBridge.invoke(fn)
			})
		}
	}

	//判断访问终端
	var browser={
    versions:function(){
        var u = navigator.userAgent, app = navigator.appVersion;
        return {
            trident: u.indexOf('Trident') > -1, //IE内核
            presto: u.indexOf('Presto') > -1, //opera内核
            webKit: u.indexOf('AppleWebKit') > -1, //苹果、谷歌内核
            gecko: u.indexOf('Gecko') > -1 && u.indexOf('KHTML') == -1,//火狐内核
            mobile: !!u.match(/AppleWebKit.*Mobile.*/), //是否为移动终端
            ios: !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/), //ios终端
            android: u.indexOf('Android') > -1 || u.indexOf('Adr') > -1, //android终端
            iPhone: u.indexOf('iPhone') > -1 , //是否为iPhone或者QQHD浏览器
            iPad: u.indexOf('iPad') > -1, //是否iPad
            webApp: u.indexOf('Safari') == -1, //是否web应该程序，没有头部与底部
            weixin: u.indexOf('MicroMessenger') > -1, //是否微信 （2015-01-22新增）
            qq: u.match(/\sQQ/i) == " qq" //是否QQ
        };
    }(),
    language:(navigator.browserLanguage || navigator.language).toLowerCase()
	}

	var myBridge = {
		fnList:[],
		invoke: function (command) {
			try {
				if (browser.versions.android) {
					
					window.ytBridge.invoke(command)
				} else if (browser.versions.ios) {
					// WKWebview 内核的ios app 交互方式
					if (win.webkit && win.webkit.messageHandlers) {
						window.webkit.messageHandlers.invoke.postMessage(command);
					} else if (win.ytBridge) {
						// UIWebview 内核的ios app交互方式
						window.ytBridge.invoke(command)
					} else {
						this.fnList.push(command)
					}
				}
			} catch (e) {
				console.log(e)
			}
		}
	}

	// 供native调用的回调函数队列
	var _js2nativeCallbackList = win._js2nativeCallbackList = []
	// 分享单例对象
	var shareInfo = {}
	var userInfo={};
	var areaInfo={};
	var locationInfo={};
	var fontInfo={};
	var scanInfo={};
	var payInfo={};
	var payWayInfo={};
	var recordInfo={};
	var jsSDK = {
		version: '2.0.0',
		/**
		 * 设置分享内容
		 * @param {Object} options 分享的参数信息
		 */
		onShare: function (options) {
			console.log(options)
			/**
			 * 加入一个时间戳，后续回调发生的时候可以通过时间戳判断回调是否过期，比如用户多次调用onShare
			 * @type {[type]}
			 */
			var timestamp = Date.now()
			options.timestamp = timestamp
			/**
			 * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
			 * @param  {[object]}   res [native传递的参数]
			 * @return {Function}     [回调函数]
			 */
			var callback = function (res) {
				console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
				if (res) {
					if (callback.timestamp !== shareInfo.timestamp) {
						console.warn('callback expired')
						return
					}
					/**
					 * 如果传入的几个回调不是函数，将会导致错误
					 */
					try {
						switch (res.code) {
							case 100:
								shareInfo.cancel && shareInfo.cancel()
								break
							case 200:
								shareInfo.success && shareInfo.success()
								break
							case 400:
								shareInfo.error && shareInfo.error()
								break
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
			callback.timestamp = timestamp

			shareInfo = options

			var num = _js2nativeCallbackList.push(callback)
			shareInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
			shareInfo.methodName = 'setShareConfig'
			var command = JSON.stringify(shareInfo)
			myBridge.invoke(command)
		},
		/**
		 * 发起分享
		 */
		share: function () {
			var command = JSON.stringify({
				methodName: 'share'
			})
			myBridge.invoke(command)
		},
		/**
		* 唤起app端登录
		*/
		login: function () {
			var command = JSON.stringify({
				methodName: 'login'
			})
			myBridge.invoke(command)
		},
		/**
		* 唤起app端支付，更具type区分支付类型
		* @param {Number} type 资源类型(以下列出部分，具体请找接口或app端获取)
		* 	3:专辑 4:单曲 5:活动-5:活动外链6:图文资讯-6:图文资讯外链8:直播栏目9:直播节目单 10:视频直播11:视频点播
		* 	12:主持人数据,前五名打赏排行榜14:微信矩阵19:话题20:网页(链接)24:投票 25:福利26:购物 27:回听
		* 	29:内容 30:红包 34:短音频33:视频合集41:问答详情38:问答专家61:UGC直播间62:专辑合集
		* @param {Number} id 资源id
		*/
		onPay: function (options) {
			var timestamp = Date.now()
			options.timestamp = timestamp
			/**
			 * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
			 * @param  {[object]}   res [native传递的参数]
			 * @return {Function}     [回调函数]
			 */
			var callback = function (res) {
				console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
				if (res) {
					if (callback.timestamp !== shareInfo.timestamp) {
						console.warn('callback expired')
						return
					}
					/**
					 * 如果传入的几个回调不是函数，将会导致错误
					 */
					try {
						switch (res.code) {
							case 100:
								shareInfo.cancel && shareInfo.cancel()
								break
							case 200:
								shareInfo.success && shareInfo.success()
								break
							case 400:
								shareInfo.error && shareInfo.error()
								break
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
			callback.timestamp = timestamp

			shareInfo = options

			var num = _js2nativeCallbackList.push(callback)
			shareInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
			shareInfo.methodName = 'pay'
			var command = JSON.stringify(shareInfo)
			myBridge.invoke(command)
		},
		/**
		* 唤起app内跳转，根据type(值同上)
		* @param {Number} type 资源类型
		* @param {Number} id 资源id
 		*/
		onJump: function (options) {
			options.methodName= 'jump'
			var command = JSON.stringify(options)
			myBridge.invoke(command)
		},
		
		getUserInfo: function (options) {
			var timestamp = Date.now()
			options.timestamp = timestamp
			/**
			 * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
			 * @param  {[object]}   res [native传递的参数]
			 * @return {Function}     [回调函数]
			 */
			var callback = function (res) {
				
				console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
				if (res) {
					if (callback.timestamp !== userInfo.timestamp) {
						console.warn('callback expired')
						return
					}
					/**
					 * 如果传入的几个回调不是函数，将会导致错误
					 */
					try {
						switch (res.code) {
							case 100:
								userInfo.cancel && userInfo.cancel(res)
								break
							case 200:
								userInfo.success && userInfo.success(res)
								break
							case 400:
								userInfo.error && userInfo.error(res)
								break
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
			callback.timestamp = timestamp

			userInfo = options

			var num = _js2nativeCallbackList.push(callback)
			userInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
			userInfo.methodName = 'getUserInfo'
			var command = JSON.stringify(userInfo)
			myBridge.invoke(command)
		},
		getAreaInfo: function (options) {
			var timestamp = Date.now()
			options.timestamp = timestamp
			/**
			 * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
			 * @param  {[object]}   res [native传递的参数]
			 * @return {Function}     [回调函数]
			 */
			var callback = function (res) {
				console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
				if (res) {
					if (callback.timestamp !== areaInfo.timestamp) {
						console.warn('callback expired')
						return
					}
					/**
					 * 如果传入的几个回调不是函数，将会导致错误
					 */
					try {
						switch (res.code) {
							case 100:
								areaInfo.cancel && areaInfo.cancel(res)
								break
							case 200:
								areaInfo.success && areaInfo.success(res)
								break
							case 400:
								areaInfo.error && areaInfo.error(res)
								break
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
			callback.timestamp = timestamp

			areaInfo = options

			var num = _js2nativeCallbackList.push(callback)
			areaInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
			areaInfo.methodName = 'getAreaInfo'
			var command = JSON.stringify(areaInfo)
			myBridge.invoke(command)
    },
    /**
     * 设置导航栏标题
     * @param {String} title 标题内容 setTitle({title: xxx})
    */
    setTitle: function (options) {
      options.methodName= 'setTitle'
      var command = JSON.stringify(options)
      myBridge.invoke(command)
    },
    /**
     * 获取app当前gps定位坐标
     * geolocation({success: res => {}})
    */
    geolocation: function (options) {
      var timestamp = Date.now()
			options.timestamp = timestamp
			/**
			 * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
			 * @param  {[object]}   res [native传递的参数]
			 * @return {Function}     [回调函数]
			 */
			var callback = function (res) {
				console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
				if (res) {
					if (callback.timestamp !== locationInfo.timestamp) {
						console.warn('callback expired')
						return
					}
					/**
					 * 如果传入的几个回调不是函数，将会导致错误
					 */
					try {
						switch (res.code) {
							case 100:
								locationInfo.cancel && locationInfo.cancel(res)
								break
							case 200:
								locationInfo.success && locationInfo.success(res)
								break
							case 400:
								locationInfo.error && locationInfo.error(res)
								break
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
			callback.timestamp = timestamp

			locationInfo = options

			var num = _js2nativeCallbackList.push(callback)
			locationInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
			locationInfo.methodName = 'geolocation'
			var command = JSON.stringify(locationInfo)
			myBridge.invoke(command)
    },
    /**
     * 获取字体大小范围
     * getFontSize({success: res => {}})
     * 1：大 2：中 3： 正常 4:大 5:特大
    */
    getFontSize: function (options) {
      var timestamp = Date.now()
			options.timestamp = timestamp
			/**
			 * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
			 * @param  {[object]}   res [native传递的参数]
			 * @return {Function}     [回调函数]
			 */
			var callback = function (res) {
				console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
				if (res) {
					if (callback.timestamp !== fontInfo.timestamp) {
						console.warn('callback expired')
						return
					}
					/**
					 * 如果传入的几个回调不是函数，将会导致错误
					 */
					try {
						switch (res.code) {
							case 100:
								fontInfo.cancel && fontInfo.cancel(res)
								break
							case 200:
								fontInfo.success && fontInfo.success(res)
								break
							case 400:
								fontInfo.error && fontInfo.error(res)
								break
						}
					} catch (error) {
						console.error(error)
					}
				}
			}
			callback.timestamp = timestamp

			fontInfo = options

			var num = _js2nativeCallbackList.push(callback)
			fontInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
			fontInfo.methodName = 'getFontSize'
			var command = JSON.stringify(fontInfo)
			myBridge.invoke(command)
    },
    /**
    * 唤起app端认证
    */
    auth: function () {
      var command = JSON.stringify({
        methodName: 'auth'
      })
      myBridge.invoke(command)
    },
    /**
     * 设置导航栏颜色
     * @param {String} color 颜色值 setTitle({color: '#FFF'})
    */
    setNavColor: function (options) {
      options.methodName= 'navColor'
      var command = JSON.stringify(options)
      myBridge.invoke(command)
    },
    /**
     * 唤起app扫码
     * scan({success: res => {res.text}})
    */
    scan: function (options) {
      var timestamp = Date.now()
      options.timestamp = timestamp
      /**
       * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
       * @param  {[object]}   res [native传递的参数]
       * @return {Function}     [回调函数]
       */
      var callback = function (res) {
        console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
        if (res) {
          if (callback.timestamp !== scanInfo.timestamp) {
            console.warn('callback expired')
            return
          }
          /**
           * 如果传入的几个回调不是函数，将会导致错误
           */
          try {
            switch (res.code) {
              case 100:
                scanInfo.cancel && scanInfo.cancel(res)
                break
              case 200:
                scanInfo.success && scanInfo.success(res)
                break
              case 400:
                scanInfo.error && scanInfo.error(res)
                break
            }
          } catch (error) {
            console.error(error)
          }
        }
      }
      callback.timestamp = timestamp

      scanInfo = options

      var num = _js2nativeCallbackList.push(callback)
      scanInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
      scanInfo.methodName = 'scan'
      var command = JSON.stringify(scanInfo)
      myBridge.invoke(command)
    },
    /**
    * 唤起app端支付方式选择，返回已选的支付方式1：支付宝 2：微信
    * @param {String} content 支付信息内容[物业缴费]
    * @param {Number} price 支付金额,单位 元
    * yt.payWay({content: '物业缴费', price: 10, success (res) { // res.type} })
    */
    payWay: function (options) {
      var timestamp = Date.now()
      options.timestamp = timestamp
      /**
       * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
       * @param  {[object]}   res [native传递的参数]
       * @return {Function}     [回调函数]
       */
      var callback = function (res) {
        // console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
        if (res) {
          if (callback.timestamp !== payWayInfo.timestamp) {
            console.warn('callback expired')
            return
          }
          /**
           * 如果传入的几个回调不是函数，将会导致错误
           */
          try {
            switch (res.code) {
              case 100:
                payWayInfo.cancel && payWayInfo.cancel(res)
                break
              case 200:
                payWayInfo.success && payWayInfo.success(res)
                break
              case 400:
                payWayInfo.error && payWayInfo.error(res)
                break
            }
          } catch (error) {
            console.error(error)
          }
        }
      }
      callback.timestamp = timestamp

      payWayInfo = options

      var num = _js2nativeCallbackList.push(callback)
      payWayInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
      payWayInfo.methodName = 'payWay'
      var command = JSON.stringify(payWayInfo)
      myBridge.invoke(command)
    },
    /**
    * 唤起app端支付，此为通用支付，需要将支付信息传给app端
    * @param {type} type 支付类型 1:支付宝 2：微信
    * @param {String} alipayOrderNo 支付宝所需参数
    * @param {Object} wetChat 微信支付所需信息 yt.generalPay({type: 2, wetChat: {appId: 'xxx', nonceStr: '', partnerid: '', paySign: '', prepayId: '', signType: 'MD5', timeStamp: ''}, success () => {}})
    * yt.generalPay({type: 1, alipayOrderNo: 'xxxx', success () => {}})
    */
    generalPay: function (options) {
      var timestamp = Date.now()
      options.timestamp = timestamp
      /**
       * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
       * @param  {[object]}   res [native传递的参数]
       * @return {Function}     [回调函数]
       */
      var callback = function (res) {
        console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
        if (res) {
          if (callback.timestamp !== payInfo.timestamp) {
            console.warn('callback expired')
            return
          }
          /**
           * 如果传入的几个回调不是函数，将会导致错误
           */
          try {
            switch (res.code) {
              case 100:
                payInfo.cancel && payInfo.cancel(res)
                break
              case 200:
                payInfo.success && payInfo.success(res)
                break
              case 400:
                payInfo.error && payInfo.error(res)
                break
            }
          } catch (error) {
            console.error(error)
          }
        }
      }
      callback.timestamp = timestamp

      payInfo = options

      var num = _js2nativeCallbackList.push(callback)
      payInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
      payInfo.methodName = 'generalPay'
      var command = JSON.stringify(payInfo)
      myBridge.invoke(command)
    },
    /**
    * 调用app的录音功能
    * @param {type} type 录音执行的方法 start：开始录音 end：停止录音 onEnd：监听录音结束(主动结束录音||设置到达最大录音时长时，会自动结束||也监听一些报错信息)
    * play：播放(播放的是app中录音的缓存文件) pause：暂停 stop: 停止播放 onPlayEnd: 监听播放结束 save：保存(app会上传文件，然后返回已上传的地址)
    * @param {Number} maxDuration 最大录音时间，倒计时结束则触发停止录音
    * @param {String} url 录音缓存文件路径，用于播放
    * @param {String} src 上传保存后的绝对路径 https://xxx.mp3
    * @return {Object} duration:录音的时长 url:录音缓存文件路径，用于播放
    * yt.record({type: 'start', maxDuration: 300, success () => {}})
    * yt.record({type: 'end', success (res) => {code: 200, duration: 48, url: 'xxxx'}})
    * yt.record({type: 'onEnd', success (res) => {code: 200, duration: 48, url: 'xxxx'}})
    * yt.record({type: 'play', url: 'xxxx', success (res) => {})
    * yt.record({type: 'pause', url: 'xxxx', success (res) => {})
    * yt.record({type: 'stop', url: 'xxxx', success (res) => {})
    * yt.record({type: 'onPlayEnd', url: 'xxxx', success (res) => {})
    * yt.record({type: 'save', url: 'xxxx', success (res) => {code: 200, src: 'https://xxx.mp3'})
    */
    record: function (options) {
      var timestamp = Date.now()
      options.timestamp = timestamp
      if (options.type === 'start' && !options.maxDuration) {
        options.error && options.error({msg: '请填写最大录音时长'})
        return
      }
      /**
       * 定义一个通用的回调函数，接收来自native端传递的参数，根据参数再来回调这边的成功、失败等回调
       * @param  {[object]}   res [native传递的参数]
       * @return {Function}     [回调函数]
       */
      var callback = function (res) {
        // console.log("native response :" + (typeof res === 'string' ? res : JSON.stringify(res)))
        if (res) {
          if (callback.timestamp !== recordInfo.timestamp) {
            console.warn('callback expired')
            return
          }
          /**
           * 如果传入的几个回调不是函数，将会导致错误
           */
          try {
            switch (res.code) {
              case 100:
                recordInfo.cancel && recordInfo.cancel(res)
                break
              case 200:
                recordInfo.success && recordInfo.success(res)
                break
              case 400:
                recordInfo.error && recordInfo.error(res)
                break
            }
          } catch (error) {
            console.error(error)
          }
        }
      }
      callback.timestamp = timestamp

      recordInfo = options

      var num = _js2nativeCallbackList.push(callback)
      recordInfo.callback = '_js2nativeCallbackList[' + (num - 1) + ']'
      recordInfo.methodName = 'record'
      var command = JSON.stringify(recordInfo)
      myBridge.invoke(command)
    },
  }
	win.yt = jsSDK
})(window, document);