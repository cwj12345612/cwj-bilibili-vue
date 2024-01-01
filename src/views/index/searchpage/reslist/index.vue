<template>
<div class="searchpage_res">
<searchpage_videolist></searchpage_videolist>
<page ></page>
</div>
</template>
<script setup>
// #region  引入组件
import searchpage_videolist from './videolist.vue'
import page from '@/components/page'
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
.searchpage_res{
    
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
</style>
