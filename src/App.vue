<template>
  <div id="app" class="app">
    <!-- <keep-alive>
      <router-view></router-view>
    </keep-alive> -->
    <router-view v-slot="{ Component }">
      <keep-alive exclude="Details">
        <component :is="Component" />
      </keep-alive>
    </router-view>
    <main-tab-bar></main-tab-bar>
  </div>
</template>

<script>
import MainTabBar from "components/contents/mainTabbar/MainTabBar";

export default {
  name: "app",
  components: {
    MainTabBar,
  },
};
</script>


<style>
@import "assets/css/base.css";
</style>
