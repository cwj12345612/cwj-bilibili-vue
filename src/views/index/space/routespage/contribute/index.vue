<template>
<div class="spacepage_contribute">
  <ul class="navlist">
    <li 
    :style="mock('@color()')"
    v-for="li in list"
     >
     <router-link :to="li.href"
     >
        <span class="title">{{ li.title }}</span>
        <span class="count">{{ li.count }}</span>
     </router-link>
</li>
  </ul>
    <router-view></router-view>
</div>
</template>
<script setup>
// #region  引入组件
import contribute_video from './video.vue'
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

const mock=(str)=>{return Mock.mock(str)}
const list=reactive([
    {id:mock('@id()'),title:'视频',count:mock('@integer(10,300)'),href:'/space/contribute/video'},
    {id:mock('@id()'),title:'音频',count:mock('@integer(10,300)'),href:'/space/contribute/audio'},
    {id:mock('@id()'),title:'专栏',count:mock('@integer(10,300)'),href:'/space/contribute/article'},
    {id:mock('@id()'),title:'相簿',count:mock('@integer(10,300)'),href:'/space/contribute/album'},
])
//#endregion

</script>
<style scoped>
.spacepage_contribute{
    /* height: 1000px; */
    width: 100%;
    background-color: #fff;
    display: flex;
}
.navlist{
    background-color: #fff;
    width: 200px;
    height: 100%;
    flex-shrink: 0;
    flex-grow: 0;
    border-right: 2px solid #e6e7e8;
}
.navlist li{
    padding: 10px 15px 10px 30px;
}
.navlist li a{
display: flex;


justify-content: space-between;
align-items: center;
}

.navlist li a .title{
    color: #222;
    font-size: 14px;
}
.navlist li a .count{
    color: #99a2aa;
    font-size: 12px;
}
li:has(>a.router-link-active){
    background-color: #0aaeec;
}
li:has(>a.router-link-active) .title,
li:has(>a.router-link-active) .count
{
color: #fff;
}
.navlist li a:hover .title{
color:#0aaee0;
}
</style>
