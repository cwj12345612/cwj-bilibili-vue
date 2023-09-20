<template>
<div class="searchpage_filter"

>
<searchpage_filtertitle></searchpage_filtertitle>
<searchpage_filterall></searchpage_filterall>
</div>
</template>
<script setup>
// #region  引入组件
import searchpage_filtertitle from './filter_title.vue'
import searchpage_filterall from './filter_all.vue'

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
.searchpage_filter{
    /* background-color: aqua; */
    /* height: 300px; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    /* 
    :style="pageconfigStore.dynamicWH({normal:1297,min:988,max:2028})"
    */
    max-width: 2028px;
    min-width: 988px;
    width: 90vw;
}
</style>
