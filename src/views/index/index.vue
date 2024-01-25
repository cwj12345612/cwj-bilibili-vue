<template>
 <cwj_header></cwj_header>
  <router-view></router-view>
  <el-backtop :right="100" :bottom="100" />
</template>
<script setup>
// #region  引入组件
import cwj_header from '@/components/header'
import loginform from './Loginpage'
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
<style>
#app:has(>header.moviepage){
  height: auto;
background-color: #242628;
}
</style>
