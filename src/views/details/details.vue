<!--商品详情组件-->
<template>
  <div>
    <details-nav-bar></details-nav-bar>
    <scroll>
      <details-swiper :images="swiperImages"></details-swiper>
      <details-base-info :goods="goods"></details-base-info>
      <details-shop-info :shops="shops"></details-shop-info>
      <details-goods-info :goodsDetails="goodsDetails"></details-goods-info>
      <details-param-info :paramsInfo="paramsInfo"></details-param-info>
      <details-comments :comments="comments"></details-comments>
      <goods-list :goodsList="recommendGoods"></goods-list>
    </scroll>
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
import Bus from "../../common/Bus.js";


import scroll from "common/scroll/scroll.vue";

import GoodsList from "components/contents/GoodsList/GoodsList.vue";

import DetailsNavBar from "./childComponents/DetailsNavBar.vue";
import DetailsSwiper from "./childComponents/DetailsSwiper.vue";
import DetailsBaseInfo from "./childComponents/DetailsBaseInfo.vue";
import DetailsShopInfo from "./childComponents/DetailsShopInfo.vue";
import DetailsGoodsInfo from "./childComponents/DetailsGoodsInfo.vue";
import DetailsParamInfo from "./childComponents/DetailsParamInfo.vue";
import DetailsComments from "./childComponents/DetailsComments.vue";
import Scroll from "../../components/common/scroll/scroll.vue";

export default {
  name: "Details",
  created() {
    this.iid = this.$route.params.iid;
    this.getDetail(this.iid);
    this.getRecommend();
  },
  components: {
    scroll,
    GoodsList,

    DetailsNavBar,
    DetailsSwiper,
    DetailsBaseInfo,
    DetailsShopInfo,
    DetailsGoodsInfo,
    DetailsParamInfo,
    DetailsComments,
    Scroll,
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
      recommendGoods: [],
    };
  },
  methods: {
    getDetail(iid) {
      getDetail(iid).then((res) => {
        const data = res.data.result;

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
    getRecommend() {
      getRecommend().then((res) => {
        this.recommendGoods = res.data.data.list;
        console.log(this.recommendGoods);
      });
    },
  },
};
</script>

<style scoped>
</style>