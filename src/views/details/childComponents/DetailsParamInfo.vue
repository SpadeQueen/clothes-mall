<!-- 商品参数详情组件 -->
<template>
  <div v-if="Object.keys(paramsInfo).length !== 0" class="paramsClass">
    <table class="sizeParam">
      <tr v-for="item in paramsInfo.sizes[0]">
        <td v-for="jtem in item">{{jtem}}</td>
      </tr>
    </table>
    <table class="typeParam">
      <tr v-for="item in paramsInfo.infos">
        <td class="typeKey">{{item.key}}</td>
        <td class="typeText">{{item.value}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "DetailsParamInfo",
  props:{
      paramsInfo:{
          type:Object,
          default(){
              return {}
          }
      }
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
.paramsClass{
    padding: 20px 15px;
    font-size: 14px;
    border-bottom: 5px solid #f2f5f8;
}
.sizeParam {
  width: 100%;
  border-collapse: collapse;
}
.sizeParam tr {
  height: 42px;
}
.sizeParam tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}

.typeParam {
  width: 100%;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
}
.typeParam tr {
  height: 42px;
}
.typeParam tr td {
  border-bottom: 1px solid rgba(100, 100, 100, 0.1);
}
.typeKey{
    width: 19%;
}
.typeText {
  color: #eb4868;
}
</style>
