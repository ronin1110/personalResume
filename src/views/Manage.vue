<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-18 15:43:36
 * @LastEditors: yaolin
-->
<template>
  <div class="manage">
    <!-- <div style="background-color: green; width: 100px; height: 100px; position: sticky; top: 100px; z-index：100"></div>
    <div style="background-color: green; width: 100px; height: 100px; position: sticky; top: 100px;"></div>
    <div style="background-color: green; width: 100px; height: 100px; position: sticky; bottom: 100px;"></div> -->

    <!-- <div style="position:sticky; top:100px;height:10px;color:red">daslkdhakshdklashlikhj</div> -->

    <div class="first-page">
      <first-page></first-page>
    </div>


    <div class='top-nav'>
      <top-nav></top-nav>
    </div>
    
     <div class="about-me"></div> 
    <div id="web-skill" style="background-color:red"></div>
    <div class="my-experience"></div>
    <div class="contact-me"></div>
  </div>
</template>

<script>
import firstPage from '../components/FirstPage'
import topNav from '../components/TopNav'

export default {
  name: 'Manage',
  data() {
    return {
      // fromType: true
    }
  },
  components: {
    firstPage,
    topNav
  },
  methods: {

  },
  created() {

  },
}
</script>

<style lang="less" scoped>
.first-page, .about-me, #web-skill{
  position: relative;
  // overflow: visible;
  width: 100%;
  // height: 100%;
  height: calc(100vh - 70px);
}
.top-nav{
  height: 100px;
  position: sticky;
  top: 0px;
  z-index: 100;
}

</style>
