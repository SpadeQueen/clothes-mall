<!--商品详情组件-->
<template>
  <div>
    <details-nav-bar></details-nav-bar>
    <details-swiper :images="swiperImages"></details-swiper>
    <details-base-info :goods="goods"></details-base-info>
    <details-shop-info :shops="shops"></details-shop-info>
    <details-goods-info :goodsDetails="goodsDetails"></details-goods-info>
    <details-param-info :paramsInfo="paramsInfo"></details-param-info>
    <details-comments :comments="comments"></details-comments>
  </div>
</template>

<script>
import {
  getDetail,
  getRecommend,
  Goods,
  Shop,
  GoodsParam,
} from "network/details.js";

import DetailsNavBar from "./childComponents/DetailsNavBar.vue";
import DetailsSwiper from "./childComponents/DetailsSwiper.vue";
import DetailsBaseInfo from "./childComponents/DetailsBaseInfo.vue";
import DetailsShopInfo from "./childComponents/DetailsShopInfo.vue";
import DetailsGoodsInfo from "./childComponents/DetailsGoodsInfo.vue";
import DetailsParamInfo from "./childComponents/DetailsParamInfo.vue";
import DetailsComments from "./childComponents/DetailsComments.vue";

export default {
  name: "Details",
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
  },
  components: {
    DetailsNavBar,
    DetailsSwiper,
    DetailsBaseInfo,
    DetailsShopInfo,
    DetailsGoodsInfo,
    DetailsParamInfo,
    DetailsComments,
  },
  data() {
    return {
      iid: "",
      swiperImages: [],
      goods: {},
      shops: {},
      goodsDetails: {},
      paramsInfo: {},
      comments: {},
    };
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.data.result;
        console.log(data);

        //1.轮播图图片
        this.swiperImages = data.itemInfo.topImages;
        //2.商品基础信息
        this.goods = new Goods(
          data.itemInfo,
          data.columns,
          data.shopInfo.services
        );
        //3.店铺信息
        this.shops = new Shop(data.shopInfo);
        //4.商品详情展示
        this.goodsDetails = data.detailInfo;
        //5.商品参数展示
        this.paramsInfo = new GoodsParam(
          data.itemParams.info,
          data.itemParams.rule
        );
        //6.商品评价展示
        if (data.rate.cRate !== 0) {
          this.comments = data.rate.list[0];
        }
      });
    },
  },
};
</script>

<style scoped>
</style>