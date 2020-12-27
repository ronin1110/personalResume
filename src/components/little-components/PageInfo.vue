<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:33:00
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div class="out">
      <div class="up-text">
        {{upText}}
      </div>

      <div class="down-text">
        <div class="X-line"></div>
          -{{downText}}-
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      upText: String,
      downText: String
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
.out{
  width: 100%;
  height: 100%;
  margin: 0;
  padding: 100px 0 0 0;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.up-text ,.down-text{
  font-size: 38px;
  font-weight: 700;
  color: #345;
  text-shadow: 0 3px 5px #345;
}

.X-line{
  border-top: 2px solid black;
}
</style>