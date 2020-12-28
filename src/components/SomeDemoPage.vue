<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:42:19
 * @LastEditors: yaolin
-->
<template>
  <div >
    <div data-aos="fade-up" data-aos-duration='1000'>
      <page-info upText='项目展示' downText='SOME DEMO'></page-info>
    </div>
    <div class="items">
      <div class="item" data-aos="zoom-in" data-aos-delay="100" >
        <demo-item  :imageSrc="require('../assets/image/github截图.jpg')" href='https://github.com/ronin1110' toolTip='完整项目太少，留个github去看看吧'></demo-item>
      </div>
      <div class="item" data-aos="zoom-in" data-aos-delay="200">
        <demo-item  :imageSrc="require('../assets/image/个人简历网站截图.jpg')" href='https://www.ronin769.cn/#/' toolTip='五天写的简历页面'></demo-item>
      </div>
      <!-- <div data-aos="zoom-in" data-aos-delay="300">
        <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
      </div> -->
    </div>
      <!-- <div class="items">
        <div data-aos="zoom-in" data-aos-delay="100" >
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="200">
          <demo-item class="item" imageSrc='https://dss1.bdstatic.com/70cFuXSh_Q1YnxGkpoWK1HF6hhy/it/u=2018205249,2032593992&fm=26&gp=0.jpg' href='https://www.baidu.com' toolTip='shahfklahlj'></demo-item>
        </div>
      </div> -->

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
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  // margin: 0 10%;
  .item{
    // padding: 20%;
    margin: 4rem;
  }
}
</style>