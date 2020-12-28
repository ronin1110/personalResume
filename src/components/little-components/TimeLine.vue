<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-24 01:31:43
 * @LastEditors: yaolin
-->
<template>

    <div class="time-line">
      <!-- <div class="start">
        <div class="iconfont">&#xe60b;</div>
      </div> -->

      <div v-for="(thing, index) in things" :key="index" :class="{'thing': true,'state-1': index%2 === 1 ? false : true}">
        <div :class="{'text': true, 'state-0': index%2 === 0 ? false : true}">
          <div class="time" data-aos='zoom-out' data-aos-duration='3000'> {{thing.time}}</div>
          <div class="content" data-aos='zoom-out' data-aos-delay='500' data-aos-duration='3000' >{{thing.content}}</div>
        </div>
        <div class="icon">
            <div class="iconfont">&#xe60b;</div>
        </div>
      </div>


    </div> 

</template>

<script>
export default {
  props: {
    things:{
      type:Array,
      default: () => [
        {
          time:'浙江工业大学(2017-2021)',
          content:'计算机数字媒体技术专业：计算机组成，计算机网络，算法，数据结构，操作系统等计算机专业课。'
        },
        {
          time:'杭州联汇科技股份有限公司（2020.7.05-2020.11.26）',
          content:'前端开发实习生，VUE + LESS + ElementUI + VantUI 等，主要工作是进行项目后台页面的开发，也有部分h5页面的开发'
        }
      ]
    }
  },
  components: {

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
.time-line{
  width: 90%;
  position: relative;
  // background-color: green;
  display: flex;
  justify-content: center;
  flex-direction: column;
  &::after{
    content: '';
    position: absolute;
    width: 50%;
    height: 100%;
    left: 0;
    margin-left: -3px;
    border-right: 3px solid black;
  }
}

.iconfont{
  font-size: 2rem;
  background-color: white;
  border-radius: 50%;
}
.thing{
  width: 100%;
  height: 200px;
  display: flex;
  position: relative;
}
.state-1{
  flex-direction: row-reverse;
}
.state-0{
  text-align: right;
}
.text{
  width: 45%;
  position: relative;
  // color: white;
}
.icon{
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  margin: 0 auto;
  z-index: 1;
}
.time{
  margin: 0;
  font-size: 1.8rem;
  font-weight: 700;
  transition: all 1s;
  &:hover{
    & + .content{
      // opacity: 1;
    }
  }
}
.content{
  // opacity: 0;
  display: inline;
  // background-color: rgba(288, 255, 255, .4);
  transition: all 1s;
  font-size: 1rem;
  
}
</style>