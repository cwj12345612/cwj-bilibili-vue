<template>
<div id="searchpage">
  <searchpage_searchinput></searchpage_searchinput>
  <searchpage_filter></searchpage_filter>
  <searchpage_reslist></searchpage_reslist>
</div>
</template>
<script setup>
// #region  引入组件
import searchpage_searchinput from './searchinput'
import searchpage_filter from './filter'
import searchpage_reslist from './reslist'
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
#searchpage{
width: 100%;
/* height: 1000px; */
/* background-color: orange; */
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
}
</style>
