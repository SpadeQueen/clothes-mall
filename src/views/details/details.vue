<!--商品详情组件-->
<template>
  <div class="details">
    <details-nav-bar ref="nav" @TitleClick="navBarClick"></details-nav-bar>
    <scroll
      ref="scroll"
      class="detailsScroll"
      :probe-type="3"
      @scroll="detailsScroll"
    >
      <details-swiper :images="swiperImages"></details-swiper>
      <details-base-info :goods="goods"></details-base-info>
      <details-shop-info :shops="shops"></details-shop-info>
      <details-goods-info :goodsDetails="goodsDetails"></details-goods-info>
      <details-param-info
        ref="params"
        :paramsInfo="paramsInfo"
      ></details-param-info>
      <details-comments ref="comment" :comments="comments"></details-comments>
      <goods-list ref="recommend" :goodsList="recommendGoods"></goods-list>
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

import { imageLoadListenerMixin } from "../../common/mixin.js";
import Bus from "../../common/Bus.js";
import { debounce } from "../../common/utils.js";

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
  mixins: [imageLoadListenerMixin],
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
      getTopYs: null,
      topYs: [],
      currentIndex: 0,
    };
  },
  mounted() {
    //此处的监视是为了获取各个模块的高度
    this.getTopYs = debounce(() => {
      this.topYs = [];
      this.topYs.push(0);
      this.topYs.push(this.$refs.params?this.$refs.params.$el.offsetTop:0);
      this.topYs.push(this.$refs.comment?this.$refs.comment.$el.offsetTop:0);
      this.topYs.push(this.$refs.recommend?this.$refs.recommend.$el.offsetTop:0);
      this.topYs.push(Number.MAX_VALUE); // 在数组末尾增加一个无限大的值，为了之后对数组做遍历
    }, 100);

    Bus.$on("goodsItemImgLoad", () => {
      this.getTopYs();
      console.log("数据是："+this.topYs);
    });
  },
  methods: {
    /***事件方法***/
    detailsScroll(position) {
      const positionY = -position.y;
      let length = this.topYs.length;

      for (let i = 0; i < length; i++) {
        if (
          (this.currentIdex != i) &
          ((positionY >= this.topYs[i]) & (positionY <= this.topYs[i + 1]))
        ) {
          this.currentIndex = i;
          this.$refs.nav.currentIndex = this.currentIndex;
        }
      }
    },
    navBarClick(index) {
      this.$refs.scroll.scrollTo(0, -this.topYs[index], 100);
    },
    /***网络请求***/
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
.details {
  height: 100vh;
  position: relative;
}
.detailsScroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
}
</style>