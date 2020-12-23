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
          <div class="time"> {{thing.time}}</div>
          <div class="content">{{thing.content}}</div>
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
          time:'2006',
          content:'dhlaskjdlkajsldkjl'
        },
        {
          time:'2006',
          content:'dhlaskjdlkajsldkjl'
        },
        {
          time:'2006',
          content:'dhlaskjdlkajsldkjl'
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
  width: 100%;
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
// .start{
//   display: flex;
//   justify-content: center;
//   z-index: 1;
//   margin-bottom: 100px;
// }
.iconfont{
  font-size: 50px;
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
  z-index: 2;
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
  font-size: 40px;
  font-weight: 700;
  &:hover{
    & + .content{
      // display: block;
      opacity: 1;
    }
  }
}
.content{
  // display: none;
  opacity: 0;
  transition: all 1s;
  font-size: 20px;
}
</style>