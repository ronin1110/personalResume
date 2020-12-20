<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 20:28:22
 * @LastEditors: yaolin
-->
<template>
  <div style="width:120px;">
    <div class="out">
      <div v-html="icon" class="iconfont "></div>
    </div>
    <div class="text">
      <div class='upText'>{{upText}}</div>
      <div class="downText">{{downText}}</div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon:{
      type:String,
      Default: ''
    },
    upText:String,
    downText:String

  },
  components: {

  },
  data(){
    return {
        
    }
  },
  methods: {
    init() {
      // this.$refs.icon.addclass(this.icon)
      // console.log(this.$refs.icon.classList.add(this.icon))
      // console.log(this.$refs.icon.classList)
    }
  },
  mounted() {
    this.init()
  },
}
</script>

<style lang="less" scoped>
.out{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100%;
  height: 120px;
  background-color: #345;
  font-size: 50px !important;
}
.iconfont{
  margin: 0;
  padding: 0;
  color: white;
  display: block;
  font-size: 50px;
}
.text{
  width: 100%;
  position: relative;
  font-weight: 700;
  font-size: 16px;
}
.downText{
  position: relative;
  text-align: right;
}
.downText::after{
  content: '';
  position: absolute;
  width: 120px;
  height: 2px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #345;
  transform: rotate(-20deg);
}
</style>