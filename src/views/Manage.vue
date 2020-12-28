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

    <div id="first-page" style="background-image: url(http://img.fangjiesong.top/resume_slide3.jpg); background-attachment: fixed">
      <first-page></first-page>
    </div>

    <div class='top-nav'>
      <top-nav></top-nav>
    </div>
    
    <div id="about-me">
       <about-me-page></about-me-page>
    </div> 
    <div id="web-skill" style="background-image: url('http://img.fangjiesong.top/resume_slide1.jpg'); background-attachment: fixed">
      <web-skill-page></web-skill-page>
    </div> 
    <div id="some-demo" >
      <some-demo-page></some-demo-page>
    </div> 
    <div id="my-experience-page" style="background: url(https://gimg2.baidu.com/image_search/src=http%3A%2F%2Fimg.pconline.com.cn%2Fimages%2Fupload%2Fupc%2Ftx%2Fwallpaper%2F1207%2F18%2Fc1%2F12378628_1342603613470.jpg&refer=http%3A%2F%2Fimg.pconline.com.cn&app=2002&size=f9999,10000&q=a80&n=0&g=0n&fmt=jpeg?sec=1611769173&t=bd0c3103faa6bad766984f416fdb61c6) no-repeat center center/cover; background-attachment: fixed">
      <my-experience-page></my-experience-page >
    </div> 
    <div id="contact-me-page" >
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
  width: 100%;
  // overflow: visible;
  // height: 100%;
  height: 100%;
  min-height: 100vh;
}
#contact-me-page{
  min-height: 100% !important;
}
#my-experience-page{
  &::before{
    content: '';
    width: 100%;
    height: 100%;
    top: 0;
    // z-index: -1;
    position: absolute;
    background-color: rgba(255, 2555, 255, .3);
  }
}
.top-nav{
  width: 100%;
  position: sticky;
  top: 0px;
  z-index: 100;
}

</style>
