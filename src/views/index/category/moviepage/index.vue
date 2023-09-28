<template>
<div class="moviepage">
   <moviepage_carousel></moviepage_carousel>
   <moviepage_navlist></moviepage_navlist>
   <moviepage_main></moviepage_main>
   <moviepage_more></moviepage_more>
</div>
</template>
<script setup>
// #region  引入组件
import moviepage_carousel from './carousel'
import moviepage_navlist from './navlist'
import moviepage_main from './main'
import moviepage_more from './more'
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
.moviepage{
    width: 100%;
    flex-shrink: 0;
    flex-grow: 1;
    /* background-color: gold; */

  
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}

</style>
