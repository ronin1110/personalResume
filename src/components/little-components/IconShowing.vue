<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 20:28:22
 * @LastEditors: yaolin
-->
<template>
  <div class="icon-showing">
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
.icon-showing{
  width: 6rem;
  height: 6rem;
}
.out{
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  width: 100%;
  height: 100%;
  background-color: #345;
}
.iconfont{
  margin: 0;
  padding: 0;
  color: white;
  display: block;
  font-size: 3rem;
}

.text{
  width: 100%;
  position: relative;
  font-weight: 700;
  font-size: 0.7rem;
}
.downText{
  position: relative;
  text-align: right;
}
.downText::after{
  content: '';
  position: absolute;
  width: 100%;
  height: 2px;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #345;
  transform: rotate(-20deg);
}
</style>