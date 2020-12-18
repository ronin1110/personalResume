<!--
 * @Description: 
 * @Author: jiangyihong
 * @Date: 2020-08-19 16:36:01
 * @LastEditors: yaolin
-->
<template>
  <div class="technology">
    <div class="technonlogy-tabs">
      <van-tabs type="card">
        <van-tab title="标签 1">
          <custom-scroll @handleRefresh="handleRefresh"
            @handleLoad="handleLoad" :loadStatus="loadStatus"
            height="calc(100vh - 30px)" :finished="finished"
            :emptyText="emptyText">
            <div class="news-list" v-for="(item, idx) in dataList" :key="item">
              <div style="height: 30px;">{{idx}}</div>
            </div>
          </custom-scroll>
        </van-tab>
        <van-tab title="标签 2">内容 2</van-tab>
        <van-tab title="标签 3">内容 3</van-tab>
      </van-tabs>
      <!-- <div style="height: 200px;background: #FFF;">
        <custom-scroll @handleRefresh="handleRefresh"
          @handleLoad="handleLoad" :loadStatus="loadStatus"
          :finished="finished">
          <div class="news-list" v-for="(item, idx) in dataList">
            <div style="height: 30px;">{{idx}}</div>
          </div>
        </custom-scroll>
      </div> -->
    </div>
  </div>
</template>


<script>
import CustomScroll from '@/components/CustomScroll.vue'

export default {
  name: 'AgriculturalTechnology',
  data () {
    return {
      loadStatus: '', // 加载状态(刷新，加载更多)，随意数，检测到修改则置为完成状态
      finished: false, // 加载更多是否加载完
      emptyText: '', // 数据为空时的提示语，可以在数据获取之后为空时设置该提示内容
      dataList: []
    }
  },
  components: {
    CustomScroll
  },
  methods: {
    // 下拉加载(刷新)
    handleRefresh () {
      console.log('handleRefresh---parent')
      setTimeout(() => {
        this.loadStatus = Math.random()
        this.dataList = new Array(20)
        this.finished = false
        // 没有数据时可以通过这个设置提示语
        // this.emptyText = '没有数据哦'
      }, 1000)
    },
    // 加载更多(滚动加载)
    handleLoad () {
      console.log('handleLoad---parent')
      setTimeout(() => {
        this.dataList.length+= 20
        this.loadStatus = Math.random()
        if (this.dataList.length >= 100) {
          this.finished = true
        }
      }, 1000)
    }
  },
  created () {
  },
  mounted () {}
}
</script>

<style lang="less" scoped>
.custom-top-banner {
  width: 100%;
  height: 150px;
  box-sizing: border-box;
  margin-bottom: 20px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>