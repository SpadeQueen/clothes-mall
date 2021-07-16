<!--detail的头部组件-->
<template>
  <div>
    <nav-bar>
      <template #nav-left>
        <img src="~assets\img\common\back.svg" class="imgClass" />
      </template>
      <template #nav-center>
        <div class="title">
          <span
            v-for="(item, index) in barTitle"
            class="titleItem"
            @click="titleClick(index)"
            :key="index"
            :class="{activeClass:index===currentIndex}"
            >{{ item }}</span
          >
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import navBar from "components/common/navBar/NavBar.vue";
export default {
  name: "detailsNavBar",
  components: {
    navBar,
  },
  data() {
    return {
      barTitle: ["商品", "参数", "评论", "推荐"],
      currentIndex: 0,
    };
  },
  methods: {
    titleClick(index) {
      this.currentIndex = index;
    },
  },
};
</script>

<style scoped>
.imgClass {
  vertical-align: middle;
}
.title {
  display: flex;
  font-size: 13px;
}
.titleItem {
  flex: 1;
}

.activeClass {
  color: var(--color-high-text);
}
</style>
