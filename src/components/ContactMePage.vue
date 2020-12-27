<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:42:19
 * @LastEditors: yaolin
-->
<template>
  <div >
    <div data-aos="fade-up" data-aos-duration='1000'>
      <page-info  upText='联系我' downText='CONTACT ME'></page-info>
    </div>
    <div class="items">
      <div class="out">
        <div class="text" data-aos='zoom-out-down'>保持年轻，保持兴趣，路还长，别停下。</div>
        <div class="icons">
          <div data-aos='fade-left' data-aos-duration='500' @click="handleClickIcon('github')">
            <span class="iconfont" >&#xe667;</span>
          </div>
          <div data-aos='fade-left' data-aos-duration='800' @click="handleClickIcon('wechat')">
            <span class="iconfont">&#xe61e;</span>
          </div>
          <div data-aos='fade-left' data-aos-duration='1100' @click="handleClickIcon('qq')">
            <span class="iconfont">&#xe619;</span>
          </div>
        </div>
      </div>
    </div>
    <el-dialog
      title=""
      :visible.sync="dialogVisible">
      <div style="display:flex; justify-content:center;">
        <el-image
          style="width: 60%; height: 60%"
          :src="url"
          fit="fill"></el-image>
      </div>
      <!-- <div slot="footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary" @click="dialogVisible = false">确 定</el-button>
      </div> -->
    </el-dialog>

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
      dialogVisible: false,
      url:''
    }
  },
  methods: {
    handleClickIcon(key) {
      switch (key) {
        case 'github':{
          window.open('https://github.com/ronin1110')
          break;}
        case 'wechat':{
          this.url = require('../assets/image/微信二维码.jpg')
          this.dialogVisible = true
          break;}
        case 'qq':{
          this.url = require('../assets/image/QQ二维码.png')
          this.dialogVisible = true
          break;}
      
        default:
          break;
      }
    }
  }
}
</script>

<style lang="less" scoped>
.items{
  display: flex;
  justify-content: center;
  margin: 5% 10%;
}
.out{
  display: flex;
  position: relative;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 400px;
  height: 350px;
  // background-color: red;
  &::before{
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 40%;
    height: 20%;
    border-right:5px solid black ;
    border-top:5px solid black ;
  };
  &::after{
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 40%;
    height: 20%;
    border-left:5px solid black ;
    border-bottom:5px solid black ;
  }
}
.text{
  font-size: 18px;
  font-weight: 700;
  color: white;
}
.icons{
  cursor: pointer;
  display: flex;
  margin-top: 20px;
  a{
    text-decoration: none;
  }
}
.iconfont{
  font-size: 40px;
  margin: 20px;
  color: white;
}
</style>