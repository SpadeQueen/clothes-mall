<!-- 设置滚动 -->
<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BetterScroll from "better-scroll";

export default {
  name: "scroll",
  props: {
    probeType: {
      type: Number,
      default: 0,
    },
    pullUpLoad: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      scroll: null,
    };
  },
  mounted() {
    this.scroll = new BetterScroll(this.$refs.wrapper, {
      click: true,
      probeType: this.probeType,
      pullUpLoad: this.pullUpLoad,
    });

    if(this.probeType==2 || this.probeType==3){
      this.scroll.on("scroll",position=>{
        this.$emit("scroll",position);
      })
    }

    if (this.pullUpLoad) {
      this.scroll.on("pullingUp", ()=>{
        this.$emit("pullingUp");
      });
    }
  },
  methods: {
    refresh() {
      this.scroll && this.scroll.refresh();
    },
    finishPullUp(){
       this.scroll && this.scroll.finishPullUp();
    }
    ,scrollTo(){
      this.scroll&&this.scroll.scrollTo(0,0)
    }
  },
};
</script>

<style scoped>
</style>

