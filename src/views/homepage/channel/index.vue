<template>
<div class="homepage_channel"

>
    <left_icons></left_icons>
    <navlist></navlist>
    <right_list></right_list>
</div>
</template>
<script setup>
// #region  引入组件
import left_icons from './left_icons.vue'
import navlist from './navlist.vue'
import right_list from './right_list.vue'
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

//#endregion

</script>
<style scoped>
.homepage_channel{
/* background-color: palevioletred; */
display: flex;
justify-content: space-between;
align-items: center;
/* :style="pageconfigStore.dynamicWH({normal:1305,max:1980,min:1020}
,{normal:110,max:130,min:100})" */
max-width: 1980px;
min-width: 1020px;
width: 91vw;
min-height: 100px;
max-height: 130px;
height: 13vh;
}
</style>
