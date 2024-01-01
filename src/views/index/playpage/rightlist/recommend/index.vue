<template>
<div class="rightlist_recommend">
   <recommend_recommendvideo
   v-for="index in 30"
   ></recommend_recommendvideo> 
</div>
</template>
<script setup>
// #region  引入组件
import recommend_recommendvideo from './recommendvideo.vue'
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
.rightlist_recommend{
    margin-top: 20px;
    width: 100%;
    /* background-color: orchid; */
    max-height: 500px;
    overflow: auto;

}
.rightlist_recommend::-webkit-scrollbar{display: none;}
</style>
