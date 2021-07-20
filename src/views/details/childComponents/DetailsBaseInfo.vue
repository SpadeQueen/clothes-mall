<!--商品详情页的商品基础信息组件 -->
<template>
  <div v-if="Object.keys(goods).length > 0" class="info">
    <div class="title">{{ goods.title }}</div>
    <div class="price">
      <span class="n-price">{{ goods.newPrice }}</span>
      <span class="o-price">{{ goods.oldPrice }}</span>
      <span v-if="goods.discount" class="discount">{{ goods.discount }}</span>
    </div>
    <div class="infoOther">
      <span>{{ goods.columns[0] }}</span>
      <span>{{ goods.columns[1] }}</span>
      <span>{{ goods.services[goods.services.length - 1].name }}</span>
    </div>
    <div class="infoService">
      <span class="infoService-item" v-for="item in goods.services">
        <img v-if="item.icon" :src="item.icon" />
        <span>{{ item.name }}</span>
      </span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsBaseInfo",
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
};
</script>

<style scoped>
.info {
  margin: 0 10px;
}
.title {
  margin: 10px 0 10px;
  /* text-indent: 2em; */
  color: #000;
  font-weight: 500;
}
.n-price {
  color: var(--color-high-text);
  font-size: 20px;
  padding-right: 5px;
}
.o-price {
  text-decoration: line-through;
  font-size: 14px;
}
.discount {
  position: relative;
  top: -5px;
  left: 5px;
  padding: 3px 10px;
  border-radius: 8px;
  background-color: var(--color-high-text);
  color: #fff;
}
.infoOther {
  padding: 20px 0 10px;
  display: flex;
  font-size: 13px;
  color: rgb(205, 205, 205);
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.infoOther span {
  flex: 1;
}
.infoService {
  display: flex;
  justify-content: space-between;
  line-height: 60px;
  /* overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap; */
}
.infoService-item img {
  width: 14px;
  height: 14px;
  position: relative;
  top: 2px;
}
.infoService-item span {
  font-size: 12px;
  color: #333;
}
</style>
