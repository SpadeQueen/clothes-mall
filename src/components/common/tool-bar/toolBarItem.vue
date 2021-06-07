<template>
  <div class="tool-bar-item" @click="itemClick">
    <div v-if="isActive == false">
      <slot name="item-img"></slot>
    </div>
    <div v-else>
      <slot name="item-img-active"></slot>
    </div>
    <div :style="activeStyle">
      <slot name="item-text"></slot>
    </div>
  </div>
</template>

<script>
import { computed } from "vue";

export default {
  name: "toolBarItem",
  props: {
    activeColor: {
      type: String,
      default: "red",
    },
    path: {
      type: String,
    },
  },
  computed: {
    isActive() {
      return this.$route.path.indexOf(this.path) != -1;
    },
    activeStyle() {
      return this.isActive ? { color: this.activeColor } : {};
    },
  },
  data() {
    return {
      // isActive: false
    };
  },
  components: {},
  methods: {
    itemClick() {
      this.$router.push(this.path);
    },
  },
};
</script>

<style>
.tool-bar-item {
  flex: 1;
  text-align: center;
  height: 49px;
  font-size: 14px;
}

.tool-bar-item img {
  height: 24px;
  width: 24px;
  margin-top: 3px;
  vertical-align: middle;
  margin-bottom: 2px;
}

.active {
  color: red;
}
</style>