<template>
  <div class="tool-bar">
    <slot></slot>
  </div>
</template>

<script>
import toolBarItem from "./toolBarItem.vue";

export default {
  name: "toolBar",
  components: {
    toolBarItem,
  },
};
</script>

<style scoped>
.tool-bar {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f6f6f6;
  box-shadow: 0px -3px 1px rgba(100, 100, 100, 0.2);
}


</style>