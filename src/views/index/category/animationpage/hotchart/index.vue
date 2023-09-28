<template>
<div class="hotchart"
:style="pageconfigStore.dynamicWH({normal:1297,max:1780,min:1020},{normal:367,max:460,min:367})"
>
<hotchart_top></hotchart_top>
<hotchart_list></hotchart_list>
</div>
</template>
<script setup>
// #region  引入组件
import hotchart_top from './top.vue'
import hotchart_list from './list.vue'
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
.hotchart{
    margin-top: 50px;
    /* background-color: orange; */
    display: grid;
    grid-template-rows: 50px 1fr;
    grid-row-gap: 20px;
    grid-template-columns: 100%;
}
</style>
