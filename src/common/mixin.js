/***混入JS***/
import {debounce} from "./utils.js";
import Bus from "./Bus.js"

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
        Bus.$on('goodsItemImgLoad', this.itemImgListener);  
    },
}
