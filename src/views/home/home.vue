<template>
    <nav-bar>
        <template #nav-center>
            <div>购物车</div>
        </template>
    </nav-bar>
    <home-swiper :banners="banners"></home-swiper>
    <recommend-view :recommend="recommend"></recommend-view>
</template>

<script>
import navBar from "common/navBar/NavBar.vue";
import NavBar from '../../components/common/navBar/NavBar.vue';
import HomeSwiper from './childComponents/HomeSwiper';
import recommendView from './childComponents/recommendView.vue'

import {getHomeMultidata} from "network/home.js";

export default {
    name:"home"
    ,components:{
        navBar,
        HomeSwiper,
        recommendView
    }
    ,data(){
        return{
            result:null,
            banners:[],
            recommend:[]
        }
    }
    ,created() {
        getHomeMultidata().then(res=>{
            this.banners=res.data.data.banner.list;
            this.recommend=res.data.data.recommend.list;
        })
    }
}
</script>

<style>
 .navBar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>