<template>
<div class="homepage_more"


>
<homepage_categoryitems></homepage_categoryitems>
<homepage_rankinglist></homepage_rankinglist>
</div>
</template>
<script setup>
// #region  引入组件
import homepage_categoryitems from './categoryitems.vue'
import homepage_rankinglist from './rankinglist.vue'
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
.homepage_more{
    /* background-color: burlywood; */
margin-top: 15px;
    display: grid;
    grid-template-columns: repeat(5,1fr);
    grid-template-rows: 100%;
    grid-gap: 20px;
    /* 
    :style="pageconfigStore.dynamicWH(
    {normal:1305,max:1980,min:1020},
    {normal:213*2+20+50+20,max:297*2+20+50+20,min:206*2+20+50+20})"
    */
    max-width: 1980px;
min-width: 1020px;
width: 91vw;

}
</style>
