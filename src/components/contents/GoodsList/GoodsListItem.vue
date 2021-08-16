<!-- 商品展示的Item组件 -->
<template>
  <div class="goodsListItem" @click="goodsItemClick">
    <img :src="showImage()" @load="goodsItemImgLoad" />
    <div class="goodsInfo">
      <p>{{ goods.title }}</p>
      <span class="price">{{ goods.price }}</span>
      <span class="collect">{{ goods.cfav }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "GoodsListItem",
  props: {
    goods: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    goodsItemImgLoad() {
      this.$Bus.$emit("goodsItemImgLoad");
    },
    goodsItemClick() {
      this.$router.push("/Details/" + this.goods.iid);
    },
    showImage () {
      return this.goods.image || this.goods.img || this.goods.show.img
    }
  },
};
</script>

<style scoped>
.goodsListItem {
  padding-bottom: 40px;
  position: relative;

  width: 48%;
  overflow: hidden;
}

.goodsListItem img {
  width: 100%;
  border-radius: 5px;
}

.goodsInfo {
  font-size: 12px;
  position: absolute;
  bottom: 5px;
  left: 0;
  right: 0;
  overflow: hidden;
  text-align: center;
}

.goodsInfo p {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  margin-bottom: 3px;
}

.goodsInfo .price {
  color: var(--color-high-text);
  margin-right: 20px;
}

.goodsInfo .collect {
  position: relative;
}

.goodsInfo .collect::before {
  content: "";
  position: absolute;
  left: -15px;
  top: -1px;
  width: 14px;
  height: 14px;
  background: url("~assets/img/common/collect.svg") 0 0/14px 14px;
}
</style>
