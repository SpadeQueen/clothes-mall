/***混入JS***/
import { debounce } from "./utils.js";

/***混入组件***/
import backTop from "../components/contents/backTop/backTop.vue";


//1.图片加载监听混入
export const imageLoadListenerMixin = {
    data() {
        return {
            imageLoadListener: null
        }
    },
    mounted() {
        const refresh = debounce(this.$refs.scroll.refresh, 100);
        this.itemImgListener = () => { refresh() };
        this.$Bus.$on('goodsItemImgLoad', this.itemImgListener);
    },
}

//2.回到顶部混入
export const backTopMixin = {
    components:{
        backTop
    },
    data() {
        return {
            currentPageHeight: 0,
            showBackTop: false
        }
    },
    mounted() {
        //获取一下当前界面的可视化高度，这个高度应该在窗口改变大小的时候重新计算（暂时未做）
        this.currentPageHeight = document.documentElement.clientHeight;
    },
    methods: {
        backTop() {
            this.$refs.scroll.scrollTo(0, 0);
        }
    },
}
