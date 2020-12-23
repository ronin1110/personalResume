<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:42:19
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div data-aos="flip-up" data-aos-duration='1000'>
      <page-info upText='项目展示' downText='SOME DEMO'></page-info>
    </div>
    <div class="items">
      <time-line></time-line>
    </div>

  </div>
</template>

<script>
import pageInfo from '../components/little-components/PageInfo'
import imageFlash from '../components/little-components/ImageFlash'
import demoItem from '../components/little-components/DemoItem'
import timeLine from '../components/little-components/TimeLine'

export default {
  props: {

  },
  components: {
    pageInfo,
    imageFlash,
    demoItem,
    timeLine
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
.items{
  height: 100%;
  display: flex;
  justify-content: center;
  margin: 0 10%;
  .item{
    min-width: 150px;
    max-width: 220px;
    margin: 20px;
  }
}
</style>