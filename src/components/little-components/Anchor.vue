<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 02:09:45
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div class="anchor">
      <div class="out">
        <a :href="href">{{text}}</a>
      </div>

    </div>
  </div>
</template>

<script>
  export default {
    props: {
      href: String,
      text:String
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
a{
  text-decoration: none;
  color: white;
}
a:hover{
  color: #F4D03F
}

.out{
  padding: 8px;
  transition: all .5s ease-out;
}
.out:hover{
  // background-color: red;
  border-radius: 10px;
  box-shadow: 0 0 10px -3px black ;
}
</style>