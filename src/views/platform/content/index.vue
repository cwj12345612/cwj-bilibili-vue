<template>
<div class="content">
<upload></upload>
</div>
</template>
<script setup>
// #region  引入组件
import upload from './upload/index.vue'
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
.content{
    margin-left: 100px;
    flex-shrink: 1;
    
    background-color: aquamarine;
    width: 100%;
    height: 500px;
}
</style>
