<template>
<div class="homepage_main"

>
<homepage_carousel></homepage_carousel>
<homepage_videos></homepage_videos>
</div>
</template>
<script setup>
// #region  引入组件
import homepage_carousel from './carousel.vue'
import homepage_videos from './videos.vue'
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
.homepage_main{
    /* background-color: teal; */
    display: grid;
    grid-column-gap: 20px;

 grid-template-columns: repeat(5,1fr);

    /* 
    :style="pageconfigStore.dynamicWH({normal:1305,max:1980,min:1020},{normal:213*2+20,max:297*2+20,min:206*2+20})"
    */
    max-width: 1980px;
min-width: 1020px;
width: 91vw;
/* min-height: 436px;
max-height: calc(297px * 2 +  20px);
height: 60vh; */
}
</style>
