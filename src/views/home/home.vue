<template>
    <nav-bar>
        <template #nav-center>
            <div>购物车</div>
        </template>
    </nav-bar>
</template>

<script>
import navBar from "common/navBar/NavBar.vue"
import NavBar from '../../components/common/navBar/NavBar.vue'
export default {
    name:"home"
    ,components:{
        navBar      
    }
}
</script>

<style>
 .navBar {
    background-color: var(--color-tint);
    color: #fff;
  }
</style>