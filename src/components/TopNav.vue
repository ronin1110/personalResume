<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-18 16:42:40
 * @LastEditors: yaolin
-->
<template>
  <div style="height:100%;width:100%; background-image: url(https://images.unsplash.com/photo-1542293787938-c9e299b880cc?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80);">
    <div class="topNav--init">
      
      <div class="first">
        <!-- <a href="#">姚霖</a> -->
        <div class="card">
          <image-flash  class="front" src='https://avatars0.githubusercontent.com/u/48253106?s=400&u=d75b79e91307961d838a3749aec3a513607023d9&v=4' :size= "50"></image-flash>
          <image-flash class="back" :src="require('../assets/image/微信二维码.jpg')" :size= '50'></image-flash>
        </div>
        <!-- <div class="info" @mouseenter="handleMouseenter" @mouseleave="handleMouseleave" >
          <span>{{name}}</span>
          <div class="line"></div>
          <sapn>{{profession}}</sapn>
        </div> -->
      </div>

      <div class="second">
        <anchor href='#about-me' text='关于我'></anchor>
        <anchor href='#web-skill' text='前端技能'></anchor>
        <anchor href='#some-demo' text='一些项目'></anchor>
        <anchor href='#my-experience-page' text='我的经历'></anchor>
        <anchor href='#contact-me-page' text='联系我'></anchor>
      </div>

      <!-- <div class="card">
        <image-flash  class="front" src='https://img-blog.csdnimg.cn/20200210114056830.jpeg?x-oss-process=image/resize,m_fixed,h_64,w_64' :size= "50"></image-flash>
        <image-flash class="back" src='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' :size= '50'></image-flash>
      </div> -->

    </div>  
  </div>
</template>

<script>
import imageFlash from '../components/little-components/ImageFlash'
import anchor from '../components/little-components/Anchor'


export default {
  props: {

  },
  components: {
    imageFlash,
    anchor,
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
      // this.name = 'Ronin769'
      // this.profession = '个人简历'
    },
    handleMouseleave () {
      // this.name = '姚霖'
      // this.profession = '前端开发'
    }
  }
}
</script>

<style lang="less" scoped>
.card{
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  align-items: center;
  left: 0;
  .front{
    backface-visibility:hidden;
    transition: all 2s;
    position: absolute;
    transform:rotateY(0deg)
  }
  &:hover .front{
    transform: rotateY(180deg);
  }

  .back{
    backface-visibility:hidden;
    transition: all 2s;
    position: absolute;
    transform:rotateY(180deg)
  }
  &:hover .back{
    transform: rotateY(0deg);
  }

}





.topNav--init{
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 60px;
  // background-color: #345;
}

.first{
  display: flex;
  align-items: center;
  margin-left: 0.5rem;
  // font-size: 20px;
}
.second{
  display: flex;
}
a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: #F4D03F;
}


.info{
  position: relative;
  color: white;
    // line-height: 0.5rem;
  span{
    text-align: center;
  }
  // left: 2rem;
  // line-height: 15px;
} 

.line{
  width: 1;
  border-top: 2px solid black;
}
</style>