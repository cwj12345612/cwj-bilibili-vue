<template>
<div class="playpage_rightlist"

>
<rightlist_upZhu></rightlist_upZhu>
<rightlist_danmulist></rightlist_danmulist>
<rightlist_videolist></rightlist_videolist>
<!-- <rightlist_recommend></rightlist_recommend> -->
</div>
</template>
<script setup>
// #region  引入组件
import rightlist_upZhu from './upZhu.vue'
import rightlist_danmulist from './danmulist.vue'
import rightlist_videolist from './videolist.vue'
import rightlist_recommend from './recommend'
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
.playpage_rightlist{
    margin-left: 30px;
    /* background-color: blueviolet; */
    background-color: #ffffff;
    width: 30%;
   /* max-height: 1000px; */
     display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* 
    :style="pageconfigStore.dynamicWH({normal:411,max:350,min:350})"
    */
    max-width: 411px;
    min-width: 350px;
    width: 27vw;
}



</style>
    