<!-- 商品详情的展示组件 -->
<template>
  <div  v-if="Object.keys(goodsDetails).length !== 0">
    <div class="info-desc" clear-fix>
      <div class="start"></div>
      <div class="desc">{{ goodsDetails.desc }}</div>
      <div class="end"></div>
    </div>
    <div v-if="goodsDetails.detailImage!=null">
      <div v-for="item in goodsDetails.detailImage" class="info-list">
        <span>{{ item.key }}</span>
        <img v-for="jtem in item.list" :src="jtem" >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "DetailsGoodsInfo",
  props: {
    goodsDetails: {
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
.info-desc {
  padding: 0 15px;
}

.info-desc .start,
.info-desc .end {
  width: 90px;
  height: 1px;
  background-color: #a3a3a5;
  position: relative;
}

.info-desc .start {
  float: left;
}

.info-desc .end {
  float: right;
}

.info-desc .start::before,
.info-desc .end::after {
  content: "";
  position: absolute;
  width: 5px;
  height: 5px;
  background-color: #333;
  bottom: 0;
}

.info-desc .end::after {
  right: 0;
}

.info-desc .desc {
  padding: 15px 0;
  font-size: 14px;
}

.info-list img {
  width: 98%;
  /* height: 400px; */
}
</style>
