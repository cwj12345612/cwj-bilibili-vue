<template>
<ul class="animepage_navlist"
:style="pageconfigStore.dynamicWH({normal:1297,max:1780,min:1020})"
>
<li v-for="index in 4">
<navlist_map></navlist_map>
</li>
</ul>
</template>
<script setup>
// #region  引入组件
import navlist_map from './map.vue'
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
.animepage_navlist{
    margin-top: 20px;
 height: 118px;
    background-color: #fff;
    display: grid;
    grid-template-columns:repeat(4,1fr);
    grid-column-gap: 20px;
    grid-template-rows: 100%;
}
.animepage_navlist li {
    padding: 16px 20px;
}
</style>
