<!--商品详情组件-->
<template>
  <div>
    <details-nav-bar></details-nav-bar>
    <details-swiper :images="swiperImages"></details-swiper>
    <details-base-info :goods="goods"></details-base-info>
    <details-shop-info :shops="shops"></details-shop-info>
  </div>
</template>

<script>
import {getDetail,getRecommend,Goods,Shop,GoodsParam} from "network/details.js";

import DetailsNavBar from "./childComponents/DetailsNavBar.vue";
import DetailsSwiper from "./childComponents/DetailsSwiper.vue";
import DetailsBaseInfo from "./childComponents/DetailsBaseInfo.vue"
import DetailsShopInfo from "./childComponents/DetailsShopInfo.vue"

export default {
  name: "Details",
  created() {
    this.iid=this.$route.params.iid;
    this.getDetail(this.iid);
  },
  components:{
    DetailsNavBar,
    DetailsSwiper,
    DetailsBaseInfo,
    DetailsShopInfo
  }
  ,data(){
    return {
      iid:"",
      swiperImages:[],
      goods:{},
      shops:{}      
    }
  }
  ,methods:{
    getDetail(iid){
      getDetail(iid).then(res=>{
        console.log(res);
        const data = res.data.result;

        //1.轮播图图片
        this.swiperImages=data.itemInfo.topImages;
        //2.商品基础信息
        this.goods=new Goods(data.itemInfo,data.columns,data.shopInfo.services);
        //3.店铺信息
        this.shops=new Shop(data.shopInfo)
      })
    }

  }
};
</script>

<style scoped>

</style>