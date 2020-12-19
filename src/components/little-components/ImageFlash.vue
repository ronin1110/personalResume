<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-19 22:15:25
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div class="box-out">
    <!-- <div class="box-out" :style="{width: size + 'px', height: size + 'px'}"> -->
      <div class="image-in">
        <el-avatar :src='src' :size="size"></el-avatar>
      </div>
      <!-- <div class="image-after"></div> -->
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      src: String,
      size: Number
    },
    components: {

    },
    data(){
      return {
        flag: false,
      }
    },
    methods: {
      init() {
        // this.$refs.after.style.backgroundPosition = this.size + 'px ' + this.size + 'px'
        // this.$nextTick(function () {
        //     console.log(this.$refs.after.style.backgroundPosition)
        // })
      }
    },
    mounted() {
      this.init()
    },
  }
</script>

<style lang="less" scoped>
.box-out{
  position: relative;
}
.image-in{
  position: relative;
}
 // 暂时放弃做效果
.image-in::after{
  content: '';
  position: absolute;
  width: 100%;
  height: calc(100% - 4px);
  border-radius: 50%;
  // background-color: red;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  
//   background-position: -300% -300%;
//   background-image: linear-gradient(-40deg, transparent 0, transparent 40%,hsla(0,0%,100%,.6) 50%, hsla(0,0%,100%,.6) 60%, transparent 70%);
//   background-repeat: no-repeat;
  transition: all 1.5s;
}
.image-in:hover::after{
    box-shadow: 0px 0px 5px 3px #38e;
  // background-position: 200% 200%;
}

</style>