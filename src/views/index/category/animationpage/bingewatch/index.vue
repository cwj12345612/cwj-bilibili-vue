<template>
<div class="bingewatch"
:style="pageconfigStore.dynamicWH({normal:1297,max:1780,min:1020},{normal:210,max:256,min:210})"
>
<bingewatch_title></bingewatch_title>
<bingewatch_list></bingewatch_list>
</div>
</template>
<script setup>
// #region  引入组件
import bingewatch_title from './title.vue'
import bingewatch_list from './list.vue'
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
.bingewatch{
    margin-top: 50px;
   background-color: #fff;
    /* background-color: aqua; */
    display: grid;
    grid-column-gap: 16px;
    grid-template-columns: repeat(6,1fr);
    grid-row-gap: 20px;
    grid-template-rows: 50px 1fr;
}
</style>
