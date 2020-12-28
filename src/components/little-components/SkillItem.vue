<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-21 02:22:53
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div class="out">
      <div class="front both">
        <div class="icon" >
          <div v-html="icon" class="iconfont"></div>
        </div> 
        <div class="text" >
          {{text}}
        </div>
      </div>


      <div class="back both">
        <div class="content">
          <ul>
            <li v-for="(item, index) in contentArray" :key="index">{{item}}</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    icon:String,
    text: String,
    content:String
  },
  components: {

  },
  data(){
    return {
      contentArray:[]
    }
  },
  methods: {
    init() {
      this.contentArray =  this.content.split('/')
    }
  },
  mounted() {
    this.init()
  },
}
</script>

<style lang="less" scoped>
.out{
  position: relative;
  width: 30vw;
  max-width: 220px;
  height:300px;
  border-radius: 0.5rem;

  &:hover .front{
    transform: rotateY(180deg);
  }
  &:hover .back{
    transform: rotateY(0deg);
  }
}

.both{
  box-shadow: 0 0 0.5rem #38e, inset 0 0 0.5rem #38e;
  background-color: #345;
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  backface-visibility:hidden;  
  transition: all 1s;
}
.front{
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  font-size: 1rem;
  font-weight: 700;
  color: white;

  transform: rotateY(0deg);
}
.back{
  transform: rotateY(180deg);
}


.iconfont{
  font-size: 4rem;
  color: white; 
  margin: 1rem;
}

.text{
}

.content{
  margin: 10px;
  font-size: 0.8rem;
  // line-height: 2rem;
  color: white;
  word-break: break-all;
  ul{
    // padding-inline-start: 1rem;
    // overflow: hidden;
    list-style-position: inside;
  }
}
</style>