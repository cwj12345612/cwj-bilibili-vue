<template>
<ul class="homepage_navlist"

>
<li v-for="index in 21"><a href="/movie">{{ mock('@cword(2,3)') }}</a></li>
<li class="more"><a href="#">
    <span>更多</span>
    <i class="colourless xialaxiao"></i>
</a></li>
</ul>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import {useRoute,useRouter} from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route=useRoute()
const router=useRouter()
// #endregion

// #region  模拟数据 mockjs
import Mock from 'mockjs'
const mock=(str)=>{
    return Mock.mock(str)
}
//#endregion

</script>
<style scoped>
.homepage_navlist{
    flex-grow: 0;
    padding-right: 30px;
    border-right: 1px solid #e3e5e7;
    /* background-color: gold; */
    display: grid;
    grid-template-columns: repeat(11,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap: 10px;
 align-items: center;
 justify-content: center;
 /* 
 :style="pageconfigStore.dynamicWH({normal:847,max:1436,min:677},
 {normal:66,max:78,min:66})"
 */
 max-width: 1436px;
 min-width: 677px;
 width: 65vw;
 max-height: 78px;
 min-height: 66px;
 height: 9vh;
}
.homepage_navlist li{
    height: 100%;
    width: 100%;
    border-radius: var( --border-radius-min);
    overflow: hidden;
    border: 1px solid #e3e5e7;
}
.homepage_navlist  a{
    font-size: 14px;
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #f6f7f8;
    color: #61666d;
}
.homepage_navlist li.more i{
    transition: all 0.3s;
}
.homepage_navlist li.more:hover i{
   transform: rotate(180deg);
}
</style>
