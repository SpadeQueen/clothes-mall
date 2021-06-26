<template>
<div class="navBar">
    <div class="left"><slot name="nav-left"></slot></div>
    <div class="center"><slot name="nav-center"></slot></div>
    <div class="right"><slot name="nav-right"></slot></div>
</div>
</template>

<script>
export default {
    name:"navBar"
}
</script>

<style>
.navBar{
    display:flex;
    text-align: center;
    height: 44px;
    line-height: 44px;    
}

.left,.right{
    width: 60px;
}

.center{
    flex:1;
}
</style>