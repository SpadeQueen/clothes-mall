<!-- 返回顶部功能 -->
<template>
  <div class="backTop">
      <img src="~assets/img/common/top.png">
  </div>
</template>

<script>
export default {
  name:'backTop',
  data () {
    return {
    }
  }
}
</script>

<style scoped>
.backTop{
    position:fixed;
    right: 10px;
    bottom: 49px;
}
.backTop img{
    width: 40px;
}
</style>
