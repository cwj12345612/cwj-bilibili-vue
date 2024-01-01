<template>
<div class="spacepage_dynamic">
  
   <ul class="list">
   <li v-for="index in 6">
    <spacepage_dynamic_card></spacepage_dynamic_card>
   </li>

   </ul>
   <spacepage_dynamic_datum ></spacepage_dynamic_datum>
</div>

</template>
<script setup>
// #region  引入组件
import spacepage_dynamic_datum from './datum.vue'
import spacepage_dynamic_card from './card'
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
.spacepage_dynamic{
    width: 100%;
    display: flex;
    justify-content: space-between;
}
.list{
    display: flex;
    flex-direction: column;
    width: 920px;
    /* background-color: cadetblue; */
}
.list li{
    overflow: hidden;
    /* background-color: gold; */
    height: 260px;
    width: 100%;
    margin-bottom: 20px;
    border-radius: 8px;
   border: 1px solid #99a299;
   display: flex;
   flex-direction: column;
}
</style>
