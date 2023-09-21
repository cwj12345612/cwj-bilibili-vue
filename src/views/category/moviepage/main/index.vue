<template>
<div class="moviepage_main"

>
<moviepage_main_videowarp></moviepage_main_videowarp>
<moviepage_main_videos></moviepage_main_videos>
</div>
</template>
<script setup>
// #region  引入组件
import moviepage_main_videowarp from './videowarp.vue'
import moviepage_main_videos from './videos.vue'

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

//#endregion

</script>
<style scoped>
.moviepage_main{
   margin-top: 20px;
    width: 100%;
    height: 300px;
    /* background-color: chocolate; */
    display: grid;
    grid-column-gap: 16px;
    grid-row-gap: 24px;
    grid-template-rows: repeat(2,1fr);
    grid-template-columns: repeat(7,1fr);
    /* 
    :style="pageconfigStore.dynamicWH({normal:1244,max:2014,min:1244},{normal:300,max:428,min:300})"
    */
    max-width: 2014px;
    min-width: 1244px;
    width: 90vw;
    min-height: 300px;
    max-height: 428px;
    height: 45vh;
}
</style>
