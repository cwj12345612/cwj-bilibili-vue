<template>
<div id="channelpage">
  <channelpage_navlist></channelpage_navlist>

  <div class="content">
    <router-view></router-view>

  </div>
</div>
</template>
<script setup>
// #region  引入组件
import channelpage_navlist from './navlist.vue'
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
<style scoped lang="less">
#channelpage{
width: 100%;
height: calc(100vh - 64px);
// overflow: auto;
background-color: orange;
display: flex;
justify-content: space-between;
.content{
    flex-grow: 1;
    background-color: palevioletred;
    flex-shrink: 1;
    max-height: 100%;
    overflow: auto;
}
}

</style>
