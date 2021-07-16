<!--商品详情组件-->
<template>
  <div>
    <details-nav-bar :title="barTitle"></details-nav-bar>
  </div>
</template>

<script>
import DetailsNavBar from "./childComponents/DetailsNavBar.vue";

export default {
  name: "Details",
  created() {
    console.log(this.$route.params.iid);
  },
  components:{
    DetailsNavBar
  }
  ,data(){
    return {
      
    }
  }
};
</script>

<style scoped>
</style>