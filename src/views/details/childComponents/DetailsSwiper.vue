<!-- 商品详情的轮播图组件 -->
<template>
<swiper class="detail-swiper">
  <swiper-item v-for="(item,index) in images " :key="index">
    <img :src="item">
  </swiper-item>
</swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper";

export default {
  name:'DetailsSwiper',
  props:{
    images:{
      type:Array,
      default(){
        return []
      }
    }
  },
  data () {
    return {
    }
  },
  components:{
      Swiper,
      SwiperItem,
  }
}
</script>

<style scoped>
.detail-swiper {
    height: 300px;
    /* overflow: hidden; */
}
</style>
