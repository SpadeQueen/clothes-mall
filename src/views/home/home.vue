<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #nav-center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <scroll
      class="homeScroll"
      ref="scroll"
      :probe-type="3"
      :pullUpLoad="true"
      @pullingUp="loadMore"
      @scroll="contentScroll"
    >
      <home-swiper class="home-swiper" :banners="banners"></home-swiper>
      <recommend-view :recommend="recommend"></recommend-view>
      <popular-view></popular-view>
      <tab-controller
        :titles="['流行', '新款', '精选']"
        @tabClick="tabClick"
      ></tab-controller>
      <goods-list :goodsList="showGoods"></goods-list>
    </scroll>
    <back-top v-show="showBackTop" @click.native="backTop"></back-top>
  </div>
</template>

<script>
import navBar from "common/navBar/NavBar.vue";
import scroll from "common/scroll/scroll.vue";

import tabController from "contents/tabController/tabController.vue";
import GoodsList from "contents/GoodsList/GoodsList.vue";
import backTop from "contents/backTop/backTop.vue";

import HomeSwiper from "./childComponents/HomeSwiper";
import recommendView from "./childComponents/recommendView.vue";
import popularView from "./childComponents/popularView.vue";

import { getHomeMultidata, getGoodsdata } from "network/home.js";

import { debounce } from "../../common/utils.js";
import Bus from "../../common/Bus.js";
import BackTop from "../../components/contents/backTop/backTop.vue";

export default {
  name: "home",
  components: {
    navBar,
    scroll,
    backTop,

    tabController,
    GoodsList,

    HomeSwiper,
    recommendView,
    popularView,
    BackTop,
  },
  data() {
    return {
      result: null,
      banners: [],
      recommend: [],
      goodsList: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] },
      },
      currentType: "pop",
      currentPageHeight: "",
      showBackTop: false,
    };
  },
  created() {
    this.getHomeMultidata();

    this.getGoodsdata("pop");
    this.getGoodsdata("new");
    this.getGoodsdata("sell");
  },
  mounted() {
    //获取一下当前界面的可视化高度，这个高度应该在窗口改变大小的时候重新计算（暂时未做）
    this.currentPageHeight = document.documentElement.clientHeight;
    console.log(this.currentPageHeight);

    const refresh = debounce(this.$refs.scroll.refresh, 500);
    // console.log(Bus);
    Bus.$on("goodsItemImgLoad", () => {
      refresh();
    });
  },
  computed: {
    showGoods() {
      return this.goodsList[this.currentType].list;
    },
  },
  methods: {
    /******组件监听方法******/
    tabClick(index) {
      switch (index) {
        case 0:
          this.currentType = "pop";
          break;
        case 1:
          this.currentType = "new";
          break;
        case 2:
          this.currentType = "sell";
          break;
      }
    },
    loadMore() {
      this.getGoodsdata(this.currentType);
    },
    contentScroll(position) {
      this.showBackTop = -position.y > this.currentPageHeight * 0.8;
    },
    backTop() {
      this.$refs.scroll.scrollTo(0,0)
    },
    /******组件请求数据方法******/
    getHomeMultidata() {
      getHomeMultidata().then((res) => {
        this.banners = res.data.data.banner.list;
        this.recommend = res.data.data.recommend.list;
      });
    },
    getGoodsdata(type) {
      let pageIndex = this.goodsList[type].page + 1;
      getGoodsdata(type, pageIndex).then((res) => {
        let goodsList = res.data.data.list;
        this.goodsList[type].list.push(...goodsList);
        this.goodsList[type].page = pageIndex;

        this.$refs.scroll.finishPullUp();
      });
    },
  },
};
</script>

<style scoped>
#home {
  height: 100vh;
  position: relative;
}

.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 9;
}

.homeScroll {
  overflow: hidden;
  position: absolute;
  top: 44px;
  bottom: 49px;
  left: 0;
  right: 0;
  /* height: 100%; */
}
</style>