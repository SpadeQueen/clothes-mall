<!-- 商品详情的店铺信息组件 -->
<template>
  <div class="shop">
    <div class="shopTop">
      <img :src="shops.logo" />
      <span>{{ shops.name }}</span>
    </div>
    <div class="shopCenter">
      <div class="shopLeft">
        <div>
          <div class="countNum">{{ shops.sells }}</div>
          <div class="countText">销量</div>
        </div>
        <div>
          <div class="countNum">{{ shops.goodsCount }}</div>
          <div class="countText">商品总数</div>
        </div>
      </div>
      <div class="shopRight">
        <table>
          <tr v-for="item in shops.score">
            <td>{{ item.name }}</td>
            <td class="score" :class="{ 'score-better': item.isBetter }">
              {{ item.score }}
            </td>
            <td class="better" :class="{ 'better-more': item.isBetter }">
              <span>{{ item.isBetter ? "高" : "低" }}</span>
            </td>
          </tr>
        </table>
      </div>
    </div>
  </div>
  <ul>
    <li v-for="item in 100">{{ item }}</li>
  </ul>
</template>

<script>
export default {
  name: "DetailsShopInfo",
  props: {
    shops: {
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
.shop {
  padding: 25px 8px;
  border-bottom: 5px solid #f2f5f8;
  border-top: 5px solid #f2f5f8;
}
.shopTop {
  line-height: 45px;
  display: flex;
  align-items: center;
}
.shopTop img {
  width: 45px;
  height: 45px;
}
.shopTop span{
    margin-left:10px;
}
.shopCenter {
  margin-top: 15px;
  display: flex;
  align-items: center;
  text-align: center;
}
.countNum{
     font-size: 18px;
}
.countText{
    font-size: 13px;
    margin-top: 10px;;
}
.shopLeft {
  flex: 1;
  display: flex;
  border-right: 1px solid rgba(0, 0, 0, 0.1);
}
.shopLeft div {
  flex: 1;
}
.shopRight {
  flex: 1;
  font-size: 13px;
}
.shopRight table tr {
  text-align: center;
}
.shopRight table td {
  padding: 5px 0 0 15px;
}

.shopRight .score {
  color: #5ea732;
}

.shopRight .score-better {
  color: #f13e3a;
}

.shopRight .better span {
  background-color: #5ea732;
  color: #fff;
  text-align: center;
}

.shopRight .better-more span {
  background-color: #f13e3a;
}
</style>
