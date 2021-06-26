<template>
    <div class="goodsList">
        <goods-list-item v-for="item in goodsList" :goods=item></goods-list-item>
    </div>
</template>

<script>
import GoodsListItem from "./GoodsListItem.vue"

export default {
    name:"GoodsList"
    ,components:{
        GoodsListItem
    }
    ,props:{
        goodsList:{
            type:Array
            ,default:[]
        }
    }
}
</script>

<style scoped>
.goodsList{
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
}
</style>>