<!--商品详情页的商品基础信息组件 -->
<template>
  <div>
    <div>标题</div>
    <div class="price">
      <span class="n-price">活动价</span>
      <span class="o-price">原价</span>
      <span class="discount">状态标识</span></div>
    <div class="infoClass2">
      <span>销量</span><span>收藏</span><span>退货补运费</span>
    </div>
    <p>横线</p>
    <div class="infoClass3">
      <span>七天无理由退货</span><span>72小时无理由退货</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsBaseInfo",
  props: {
    goods: {
      type: Object,
    },
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.infoClass2 {
  display: flex;
  font-size: 13px;
  color: rgb(205, 205, 205);
}
.infoClass2 span {
  flex: 1;
}
.infoClass3 {
  display: flex;
}
.infoClass3 span {
  flex: 1;
}
</style>
