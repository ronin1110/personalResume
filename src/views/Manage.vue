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
    
    <div id="about-me">
       <about-me-page></about-me-page>
    </div> 
    <div id="web-skill">
      <web-skill-page></web-skill-page>
    </div> 
    <!-- <div id='web-skill' data-aos="flip-left"  style="width:100px; height:100px; background-color:red">dkashdlkhaslkdjhaslkjh</div>
    <div id='web-skill' data-aos="fade-down" style="width:100px; height:100px; background-color:red">dkashdlkhaslkdjhaslkjh</div>
    <div id='web-skill' data-aos="fade-down" style="width:100px; height:100px; background-color:red">dkashdlkhaslkdjhaslkjh</div>
    <div id='web-skill' data-aos="fade-down" style="width:100px; height:100px; background-color:red">dkashdlkhaslkdjhaslkjh</div>
    <div id='web-skill' data-aos="fade-down" style="width:100px; height:100px; background-color:red">dkashdlkhaslkdjhaslkjh</div>
    <div class="my-experience"></div>
    <div class="contact-me"></div> -->
  </div>
</template>

<script>
import firstPage from '../components/FirstPage'
import topNav from '../components/TopNav'
import aboutMePage from '../components/AboutMePage'
import webSkillPage from '../components/WebSkillPage'

export default {
  name: 'Manage',
  data() {
    return {
      // fromType: true
    }
  },
  components: {
    firstPage,
    topNav,
    aboutMePage,
    webSkillPage
  },
  methods: {

  },
  created() {

  },
}
</script>

<style lang="less" scoped>
.first-page, #about-me, #web-skill{
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
