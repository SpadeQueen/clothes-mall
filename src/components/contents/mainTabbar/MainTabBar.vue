<template>
  <div id="tool-bar">
    <tool-bar>
      <toolBarItem  v-for="jtem in toolBarDataList" :path="jtem.path">
        <template #item-img>
          <img :src="jtem.imgSrc" />
        </template>
        <template #item-img-active>
          <img :src="jtem.activeImgSrc" />
        </template>
        <template #item-text>
          <div>{{ jtem.text }}</div>
        </template>
      </toolBarItem>
      <!-- <toolBarItem path="/home">
        <template #item-img>
          <img src="./assets/img/toolBarImg/home.png" />
        </template>
        <template #item-img-active>
          <img src="./assets/img/toolBarImg/activeHome.png" />
        </template>
        <template #item-text>
          <div>首页</div>
        </template>
      </toolBarItem>

      <toolBarItem path="/category">
        <template #item-img>
          <img src="./assets/img/toolBarImg/category.png" />
        </template>
        <template #item-img-active>
          <img src="./assets/img/toolBarImg/activeCategory.png" />
        </template>
        <template #item-text>
          <div>分类</div>
        </template>
      </toolBarItem>

      <toolBarItem path="/car">
        <template #item-img>
          <img src="./assets/img/toolBarImg/car.png" />
        </template>
        <template #item-img-active>
          <img src="./assets/img/toolBarImg/activeCar.png" />
        </template>
        <template #item-text>
          <div>购物车</div>
        </template>
      </toolBarItem>

      <toolBarItem path="/user">
        <template #item-img>
          <img src="./assets/img/toolBarImg/user.png" />
        </template>
        <template #item-img-active>
          <img src="./assets/img/toolBarImg/activeUser.png" />
        </template>
        <template #item-text>
          <div>我的</div>
        </template>
      </toolBarItem> -->
    </tool-bar>
  </div>
</template>

  <script>
    import toolBar from 'common/tool-bar/toolBar'
    import toolBarItem from 'common/tool-bar/toolBarItem'

    export default {
      name: "MainTabBar",
    components: {
    toolBar,
    toolBarItem,
  },
  data() {
    return {
      toolBarDataList: [
        {
          path: "/home",
          imgSrc: require("assets/img/tabbar/home.svg"),
          activeImgSrc: require("assets/img/tabbar/home_active.svg"),
          text: "首页",
        },
        {
          path: "/category",
          imgSrc:  require("assets/img/tabbar/category.svg"),
          activeImgSrc:  require("assets/img/tabbar/category_active.svg"),
          text: "分类",
        },
        {
          path: "/car",
          imgSrc:  require("assets/img/tabbar/cart.svg"),
          activeImgSrc:  require("assets/img/tabbar/cart_active.svg"),
          text: "购物车",
        },
        {
          path: "/user",
          imgSrc:  require("assets/img/tabbar/profile.svg"),
          activeImgSrc:  require("assets/img/tabbar/profile_active.svg"),
          text: "用户",
        },
      ],
    };
  }
    }
  </script>

<style scoped>

</style>
