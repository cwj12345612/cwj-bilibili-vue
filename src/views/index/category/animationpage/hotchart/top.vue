<template>
<div class="timeline_top">
<div class="left">
<div class="h">
    <i class="colour fanjutuijian"></i>
    <h3>番剧热播榜</h3>
</div>

</div>
<button class="all">
    <span>查看更多</span>
    <i class="colourless gengduo"></i>
</button>
</div>
</template>
<script setup>
// #region  引入组件

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
.timeline_top{
    /* background-color: cadetblue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.left {
    display: flex;
    align-items: center;
}
.h{
display: flex;
align-items: center;

}
.h i{
    font-size: 34px;
}
.h h3{
    font-size: 24px;
    color: #000000;
}
.all{
    height: 80%;
    padding: 0 10px;
     color: #000000;
    border: 1px solid #e1e2e3;
    background-color: #ffffff;
    border-radius: var(--border-radius-max);
}
.all:hover{
    background-color: rgb(227, 229, 231);
}
</style>
