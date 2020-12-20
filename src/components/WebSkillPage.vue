<!--
 * @Description: 
 * @Author: yaolin
 * @Date: 2020-12-20 16:42:19
 * @LastEditors: yaolin
-->
<template>
  <div>
    <div data-aos="flip-up" data-aos-duration='1000'>
      <page-info upText='前端技能' downText='WEB SKILL'></page-info>
    </div>
      <div class="icons">
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe602;' text='HTML' content='我都维护会计师的回复会计核算懒得看,dksahdkhaskdhksa'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe602;' text='HTML' content='我都维护会计师的回复会计核算懒得看'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe602;' text='HTML' content='我都维护会计师的回复会计核算懒得看'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe602;' text='HTML' content='我都维护会计师的回复会计核算懒得看'></skill-item>
        </div>
        <div data-aos="zoom-in" data-aos-delay="100" >
          <skill-item class="icon" icon='&#xe602;' text='HTML' content='我都维护会计师的回复会计核算懒得看'></skill-item>
        </div>

      </div>

  </div>
</template>

<script>
import pageInfo from '../components/little-components/PageInfo'
import imageFlash from '../components/little-components/ImageFlash'
import iconShowing from '../components/little-components/IconShowing'
import skillItem from '../components/little-components/SkillItem'
import SkillItem from './little-components/SkillItem.vue'

export default {
  props: {

  },
  components: {
    pageInfo,
    imageFlash,
    iconShowing,
    skillItem
  },
  data(){
    SkillItem
    return {
      
    }
  },
  methods: {

  }
}
</script>

<style lang="less" scoped>
.icons{
  display: flex;
  justify-content: center;
  .icon{
    margin: 100px;
  }
}
</style>