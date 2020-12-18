import {Loading} from 'element-ui';
export const loadding = {
    data() {
        return {
            //loading显示文本
            progressStr: '加载中，请稍候...',
        }
    },
    methods: {
        /**打开loading
         *@param progressStr 提示信息
         * @param timeout 超时时间：单位毫秒，默认10000（10秒）
         */
        startLoading: function (progressStr) {

            console.log(this,this.progressStr)
            if (progressStr && progressStr != '') {
                this.progressStr = progressStr
            }

            this.loadingObj = Loading.service({
                lock: true,
                text: this.progressStr,
                background: 'rgba(0, 0, 0, 0.3)'
            })
            //10秒后自动关闭
            // setTimeout(() => {
            //     this.endLoading()
            // }, timeout)
        },
        //关闭结束loading
        endLoading: function () {
            if (this.loadingObj !== undefined && this.loadingObj !== null) {
                this.loadingObj.close();
            }
        },
        // //设置loading字符串，如果有需要的话
        // setLoadingText: function (progressStr) {
        //     console.log(this, this.progressStr, progressStr)
        //     if (this.loadingObj !== undefined && this.loadingObj !== null) {
        //         this.loadingObj.text = progressStr
        //     }
        // }
    }
}