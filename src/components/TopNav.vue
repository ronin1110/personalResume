<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-18 16:42:40
 * @LastEditors: yaolin
-->
<template>
  <div style="height:100%;width:100%">
    <div class="topNav--init">
      <div class="first">
        <!-- <a href="#">姚霖</a> -->

        <div style="position:relative">
          <el-avatar class="avatar" src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' :size='50'></el-avatar>
        </div>
        <div class="info" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" >
          <div>
            <span>{{name}}</span>
          </div>
          <div class="line"></div>
          <div>
            <span>{{profession}}</span>
          </div>
        </div>
      </div>
      <div class="second">
        <div class="item">
          <a href="#">基本信息</a>
        </div>
        <div class="item">
          <a href="#">基本信息</a>
        </div>
        <div class="item">
          <a href="#">基本信息</a>
        </div>
        <div class="item">
          <a href="#">基本信息</a>
        </div>
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
        flag: true,
        name: '姚霖',
        profession: '前端开发'
      }
    },
    methods: {
      handleMouseenter () {
        this.name = 'Ronin769'
        this.profession = '个人简历'
      },
      handleMouseleave () {
        this.name = '姚霖'
        this.profession = '前端开发'
      }
    }
  }
</script>

<style lang="less" scoped>
.topNav--init{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 70px;
  width: 100%;
  background-color: #345;
}
.first{
  display: flex;
  margin-left: 10px;
  // font-size: 20px;
}
.second{
display: flex;
}
.item{
  font-size: 15px;
  margin: 0 30px;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: #F4D03F;
}
.avatar::after{
  content: '';
  position: absolute;
  height: 50px;
  width: 50px;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  border-radius: 50%;
  box-shadow: 0 0 10px 3px #38e;
}
.info{
  position: absolute;
  left: 70px;
  text-align: center;
  margin-left: 5px;
  color: white;
} 

.line{
  margin-top: 5px;
  border-top: 2px solid black;
}
</style>