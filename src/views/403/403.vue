<!--
 * @Description: ce
 * @Author: zhang_weidie
 * @Date: 2020-06-28 14:44:18
-->

<template>
  <div class="custom-body">
    <img src="@/assets/no_permission.png" />
    <div>
      <!-- <p>403</p> -->
      <p>抱歉，您暂无权限访问，请联系管理员开通权限！</p>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.custom-body {
  margin: 0;
  padding: 0;
  height: 100vh;
  background: #f2f2f2;
  display: flex;
  align-items: center;
  img {
    margin: 0 100px;
  }
  div {
    p {
      margin: 0;
      font-size: 20px;
      color: #999999;
    }
    // p:nth-child(1) {
    //   font-size: 80px;
    //   font-weight: bold;
    //   color: #434e59;
    // }
    // p:nth-child(2) {
    //   font-size: 20px;
    //   color: #999999;
    // }
  }
}
</style>
