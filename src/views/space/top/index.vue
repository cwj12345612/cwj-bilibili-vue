<template>
<div class="top">
    <top_header></top_header>
<top_nav></top_nav>
</div>
</template>
<script setup>
// #region  引入组件
import top_header from './header.vue'
import top_nav from './nav.vue'
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
.top{
    
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
   
}
</style>
