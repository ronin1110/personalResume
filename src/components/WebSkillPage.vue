<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:42:19
 * @LastEditors: yaolin
-->
<template>
  <div>
  <!-- <div style="  background-image: url('http://img.fangjiesong.top/resume_slide3.jpg');"> -->
    <div data-aos="fade-up" data-aos-duration='1000'>
      <page-info upText='前端技能' downText='WEB SKILL'></page-info>
    </div>
      <div class="icons">
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe602;' text='HTML' content='
            熟练运用html标签/
            熟悉html5新特性/
            熟悉Dom模型/
            熟练HTML熟悉盒模型和各类布局方式、能够根据设计图实现页面布局和交互效果/
            静态页面编写熟练'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe601;' text='CSS' content='
            熟悉CSS及CSS3新属性/
            了解@keyframes制作动画效果/
            熟悉transform制作过渡效果/
            了解LESS预处理器'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe6f8;' text='JS' content='熟悉js基础/熟悉各种基础的api调用/熟悉js继承'></skill-item>
        </div>
      </div>
      <div class="icons">
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe72f;' text='LESS' content='
            熟悉LESS嵌套/
            其他有些了解'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe6c5;' text='VUE' content='
          熟悉模块组件化/
          熟悉Vue.js处理移动端的模块开发/
          熟悉如vue-cli,vue-router,axios,vuex,webpack,git等的使用/
          目前主要用的是VUE'></skill-item>
        </div>
      </div>

  </div>
</template>

<script>
import pageInfo from '../components/little-components/PageInfo'
import imageFlash from '../components/little-components/ImageFlash'
import iconShowing from '../components/little-components/IconShowing'
import skillItem from '../components/little-components/SkillItem'
import SkillItem from './little-components/SkillItem.vue'

export default {
  props: {

  },
  components: {
    pageInfo,
    imageFlash,
    iconShowing,
    skillItem
  },
  data(){
    SkillItem
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.icons{
  display: flex;
  justify-content: center;
  .icon{
    margin: 50px 80px 30px;
  };
}
</style>