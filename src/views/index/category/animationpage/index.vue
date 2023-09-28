<template>
<div id="animepage">
<animepage_banner></animepage_banner>
<animepage_navlist></animepage_navlist>
<animepage_bingewatch></animepage_bingewatch>
<animepage_timeline></animepage_timeline>
<animepage_hotchart></animepage_hotchart>
<animepage_recommand></animepage_recommand>
</div>
</template>
<script setup>
// #region  引入组件
import animepage_banner from './banner'
import animepage_navlist from './navlist'
import animepage_bingewatch from './bingewatch'
import animepage_timeline from './timeline'
import animepage_hotchart from './hotchart'
import animepage_recommand from './recommand'

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
#animepage{
width: 100%;
height: 1000px;
/* background-color: orange; */
display: flex;
flex-direction: column;
align-items: center;
}
</style>
