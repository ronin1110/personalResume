<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:42:19
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div data-aos="flip-up" data-aos-duration='1000'>
      <page-info upText='关于我' downText='ABOUT ME'></page-info>
    </div>
      <div class="icons">
        <div data-aos="zoom-in" data-aos-delay="100" >
          <icon-showing class="icon" icon='&#xe614;' upText='年龄' downText='22'></icon-showing>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
        <icon-showing class="icon" icon='&#xe657;' upText='学历' downText='大学本科'></icon-showing>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
        <icon-showing class="icon" icon='&#xe61b;' upText='坐标' downText='杭州'></icon-showing>
        </div>
        <div data-aos="zoom-in" data-aos-delay="400">
        <icon-showing class="icon" icon='&#xe644;' upText='性别' downText='男'></icon-showing>
        </div>

      </div>

  </div>
</template>

<script>
import pageInfo from '../components/little-components/PageInfo'
import imageFlash from '../components/little-components/ImageFlash'
import iconShowing from '../components/little-components/IconShowing'

export default {
  props: {

  },
  components: {
    pageInfo,
    imageFlash,
    iconShowing
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
.icons{
  display: flex;
  justify-content: center;
  .icon{
    margin: 100px;
  }
}
</style>