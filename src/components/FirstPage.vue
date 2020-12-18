<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-18 16:12:55
 * @LastEditors: yaolin
-->
<template>
  <div style="width:100%;height:100%">
    <div class="firstPage">
      <div class="avatar">
        <el-avatar src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' :size='200'></el-avatar>
      </div>
      <div class="text--hello">
        <div class="text">
          Hello! I am Ronin769.
        </div>
      </div>

      <div class="text--descrip">
        <p>一名前端开发者</p>
        <p style="text-align:center"> "WTFC!"</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {

    },
    components: {

    },
    data(){
      return {
        
      }
    },
    methods: {

    }
  }
</script>

<style lang="less" scoped>
.firstPage{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: #345;
}
.avatar{
  position: relative;

}
.avatar::after{
    content: "";
    position: absolute;
    width: 200px;
    height: 200px;
    border-radius: 50%;
    // background-color: red;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;

    background-image: linear-gradient(-40deg, transparent 0, transparent 40%,hsla(0,0%,100%,.6) 50%, hsla(0,0%,100%,.6) 60%, transparent 70%);
    background-position: -200px -200px;
    background-repeat: no-repeat;
    transition: all 1.5s;
}
.avatar:hover::after{
  background-position: 200px 200px;
  // border: 1px solid yellow;
  box-shadow: 0px 0px 10px 5px #38e;
}


.text--hello{
  position: relative;
  text-align: center;
  font-size: 70px;
  font-weight: 700;
  color: transparent;

  // background-image: linear-gradient(50deg, transparent 0, transparent 40%,rgba(51,136,238,.8) 50%,rgba(51,136,238,.8) 55%, transparent 80%);
   background-image: linear-gradient(30deg, rgb(51, 136, 238), rgb(255, 255, 255), rgb(51, 136, 238));
  background-clip: text; // 背景裁剪范围是文字
  
  animation: light-move 3s infinite;
  	animation-direction:alternate;

}
@keyframes light-move {
  0% {
    background-position: -600px;
  }
  100% {
    background-position: 600px;
  }
}

.text--descrip{
  font-size: 30px;
  font-weight: 700px;
  color: white;
  font-style: italic;
}
</style>