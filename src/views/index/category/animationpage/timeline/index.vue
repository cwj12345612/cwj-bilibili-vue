<template>
<div class="timeline"

>
<timeline_top></timeline_top>
<timeline_list></timeline_list>
</div>
</template>
<script setup>
// #region  引入组件
import timeline_top from './top.vue'
import timeline_list from './list.vue'
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
.timeline{
    min-width: 1020px;
max-width: 1780px;
width: 90vw;
/* 
:style="pageconfigStore.dynamicWH(undefined,
{normal:367,max:460,min:367})"
*/
max-height: 460px;
min-height: 367px;
height: 30vh;
    margin-top: 50px;
    /* background-color: blanchedalmond; */
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-row-gap: 20px;
    grid-template-columns: 100%;
}
</style>
