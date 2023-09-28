<script setup>
// #region  引入组件
import playpage_leftmain from './leftmain'
import playpage_rightlist from './rightlist'

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
<!-- 播放页面 -->
<template>
<div id="playpage"

>
<playpage_leftmain></playpage_leftmain>
<playpage_rightlist></playpage_rightlist>
</div>
</template>

<style scoped>
#playpage{
  
    margin-top: 15px;
    /* height: 1000px; */
    /* background-color: orange; */
   display: flex;
 
}

</style>

