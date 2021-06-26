<template>
  <div class="tabController">
    <div
      class="tabControllerItem"
      v-for="(item, index) in titles"
      @click="tabClick(index)"
      :class="{ active: currentIndex === index }"
    >
      <span>{{ item }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "tabController",
  props: {
    titles: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  data() {
    return {
      currentIndex: 0,
    };
  },
  methods: {
    tabClick(index) {
      this.currentIndex = index;
      this.$emit("tabClick",index);
    },
  },
};
</script>

<style>
.tabController {
  display: flex;
  line-height: 40px;
  font-size: 15px;
  background-color: #fff;
  z-index: 9;
}

.tabControllerItem {
  flex: 1;
  text-align: center;
}

.active {
  color: var(--color-high-text);
}

.active span {
  border-bottom: 2px solid var(--color-high-text);
}
</style>