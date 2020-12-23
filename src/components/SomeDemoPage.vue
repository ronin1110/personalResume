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
        <div data-aos="zoom-in" data-aos-delay="100" >
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='项目'></demo-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="300">
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
        </div>
      </div>
      <div class="items">
        <div data-aos="zoom-in" data-aos-delay="100" >
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
        </div>
      </div>

  </div>
</template>

<script>
import pageInfo from '../components/little-components/PageInfo'
import imageFlash from '../components/little-components/ImageFlash'
import demoItem from '../components/little-components/DemoItem'

export default {
  props: {

  },
  components: {
    pageInfo,
    imageFlash,
    demoItem
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