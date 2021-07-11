<template>
  <div id="app" class="app">
    <router-view></router-view>
    <main-tab-bar></main-tab-bar>
    <swiper></swiper>
  </div>
</template>

<script>
import MainTabBar from "components/contents/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar
  },
};
</script>


<style>
@import "assets/css/base.css";
</style>
