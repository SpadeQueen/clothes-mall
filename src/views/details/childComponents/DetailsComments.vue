<!-- 商品详情评价组件 -->
<template>
  <div v-if="Object.keys(comments).length !== 0" class="commentClass">
    <div class="commentHead">
      <img :src="comments.user.avatar" />
      <span>{{ comments.user.uname }}</span>
    </div>
    <div class="commentCenter">{{ comments.content }}</div>
    <div class="commentTime">
      <span>{{ showDate(comments.created) }}</span>
      <span>{{ comments.style }}</span>
    </div>
    <div class="commentList">
      <img v-for="item in comments.images" :src="item" />
    </div>
  </div>
  <ul>
    <li v-for="item in 100">{{ item }}</li>
  </ul>
</template>

<script>
import { formatDate } from "../../../common/utils.js";

export default {
  name: "DetailsComments",
  props: {
    comments: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  computed: {
    showDate(value) {
      //   1. 将时间戳转化为Date对象
      const date = new Date(value * 1000);
      return formatDate(date, "yyyy-MM-dd hh:mm:ss");
    },
  },
};
</script>

<style scoped>
.commentClass {
  padding: 5px 12px;
  color: #333;
  border-bottom: 5px solid #f2f5f8;
}
.commentHead {
  padding: 10px 0 5px;
  /* vertical-align: middle; */
}
.commentHead img {
  width: 42px;
  border-radius: 50%;
}
.commentHead span {
  position: relative;
  font-size: 15px;
  top: -15px;
  margin-left: 10px;
}
.commentCenter {
  padding: 0 5px 15px;
  font-size: 14px;
  color: #777;
  line-height: 1.5;
}
.commentTime {
  font-size: 12px;
  color: #777;
  margin-left: 3px;
}
.commentList img {
  width: 70px;
  height: 70px;
  margin-right: 5px;
}
</style>
