<template>
<ul class="videos">
<li v-for="index in 6" >
<videocard></videocard>
</li>   
</ul>
</template>
<script setup>
// #region  引入组件
import videocard from '@/components/card/videocard.vue'
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
.videos{
   grid-row: span 2;
   grid-column: span 3;
    /* background-color: goldenrod; */
    display: grid;
    grid-gap: 20px;
   
    grid-template-columns: repeat(3,1fr);
    grid-template-rows: repeat(2,1fr);
}
</style>
