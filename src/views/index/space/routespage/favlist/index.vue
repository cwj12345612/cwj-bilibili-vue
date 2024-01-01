<template>
<div class="spacepage_favlist">
    <space_favlist_navlist></space_favlist_navlist>
<space_favlist_createcard></space_favlist_createcard>
</div>
</template>
<script setup>
// #region  引入组件
import space_favlist_navlist from './navlist.vue'
import space_favlist_createcard from './createcard.vue'

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
.spacepage_favlist{
    width: 100%;
    display: flex;
    /* height: 1000px; */
    /* background-color: orangered; */
    background-color: #fff;
}
</style>
