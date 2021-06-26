<template>
  <div id="home">
    <nav-bar class="home-nav">
      <template #nav-center>
        <div>购物车</div>
      </template>
    </nav-bar>
    <home-swiper class="home-swiper" :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
    <popular-view></popular-view>
    <tab-controller
      :titles="['流行', '新款', '精选']"
      @tabClick="tabClick"
    ></tab-controller>
    <goods-list :goodsList="showGoods"></goods-list>
  </div>
</template>

<script>
import navBar from "common/navBar/NavBar.vue";
import tabController from "contents/tabController/tabController.vue";
import GoodsList from "contents/GoodsList/GoodsList.vue";

import HomeSwiper from "./childComponents/HomeSwiper";
import recommendView from "./childComponents/recommendView.vue";
import popularView from "./childComponents/popularView.vue";

import { getHomeMultidata, getGoodsdata } from "network/home.js";

export default {
  name: "home",
  components: {
    navBar,
    tabController,
    GoodsList,

    HomeSwiper,
    recommendView,
    popularView,
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
    };
  },
  created() {
    this.getHomeMultidata();

    this.getGoodsdata("pop");
    this.getGoodsdata("new");
    this.getGoodsdata("sell");
  },
  computed: {
    showGoods() {
      return this.goodsList[this.currentType].list;
    },
  },
  methods: {
    /******组件监听方法******/
    tabClick(index) {
      console.log("监听：" + index);
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
      });
    },
  },
};
</script>

<style>
.home-nav {
  background-color: var(--color-tint);
  color: #fff;

  position: fixed;
  top: 0px;
  left: 0;
  right: 0;
  z-index: 9;
}

#home {
  margin-top: 44px;
}
</style>