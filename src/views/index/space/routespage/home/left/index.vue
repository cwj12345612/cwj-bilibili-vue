<template>
<div class="left">
<home_left_fav></home_left_fav>  
<home_left_coin></home_left_coin>
<home_left_subbangumi></home_left_subbangumi>
</div>
</template>
<script setup>
// #region  引入组件
import home_left_fav from './fav.vue'
import home_left_coin from './coin.vue'
import home_left_subbangumi from './subbangumi.vue'

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
div.left{
    width: 68%;
    /* height: 1000px; */
    /* background-color: burlywood; */
    background-color: #fff;
    border: 1px solid #eeeeee;
    border-radius: 8px;
    padding: 15px  20px;
}
</style>
