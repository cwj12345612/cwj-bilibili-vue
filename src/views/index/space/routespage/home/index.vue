<template>
<div class="home">
<home_left></home_left>
<home_right></home_right>
</div>
</template>
<script setup>
// #region  引入组件
import home_left from './left'
import home_right from './right'
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
.home{
width: 100%;
/* height: 100%; */
display: flex;
justify-content: space-between;
}
</style>
