<template>
<div class="spacepage_compilations">
  <router-view></router-view>    
</div>
</template>
<script setup>
// #region  引入组件

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
.spacepage_compilations{
    border-radius: 8px;
    /* background-color: cornflowerblue; */
    border: 1px solid #99a299;
    width: 100%;
    /* height: 600px; */
    display: flex;
    flex-direction: column;
    align-items: center;
overflow: hidden;
padding: 20px;
}
</style>
