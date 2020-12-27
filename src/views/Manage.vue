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

    <div id="first-page" style="background-image: url(http://img.fangjiesong.top/resume_slide3.jpg);">
      <first-page></first-page>
    </div>


    <div class='top-nav'>
      <top-nav></top-nav>
    </div>
    
    <div id="about-me" style="background-image: url('http://img.fangjiesong.top/resume_slide1.jpg')">
       <about-me-page></about-me-page>
    </div> 
    <div id="web-skill" >
      <web-skill-page></web-skill-page>
    </div> 
    <div id="some-demo" style="background: url(https://images.unsplash.com/photo-1542319150-fb62a2e8c476?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1350&q=80) no-repeat center center/cover">
      <some-demo-page></some-demo-page>
    </div> 
    <div id="my-experience-page">
      <my-experience-page></my-experience-page>
    </div> 
    <div id="contact-me-page" style="background: url(https://images.unsplash.com/photo-1542300058-849d3b08aa0f?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&auto=format&fit=crop&w=1268&q=80) no-repeat center center/cover;">
      <contact-me-page></contact-me-page>
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
import someDemoPage from '../components/SomeDemoPage'
import myExperiencePage  from '../components/MyExperiencePage'
import contactMePage  from '../components/ContactMePage'

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
    webSkillPage,
    someDemoPage,
    myExperiencePage,
    contactMePage
  },
  methods: {
  },
  created() {

  },
}
</script>

<style lang="less" scoped>
.manage{
  width: 100%;
  position: relative;
  // width: clac(100%-100px);
  // overflow: hidden;
  // scroll-behavior: smooth;
}
#first-page, #about-me, #web-skill, #some-demo, #contact-me-page, #my-experience-page{
  position: relative;
  // overflow: visible;
  min-width: 320px;
  // height: 100%;
  height: 100vh
}
.top-nav{
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 100;
}

</style>
