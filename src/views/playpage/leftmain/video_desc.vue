<template>
    <div class="leftmain_videodesc"   >
<div class="content"
 id="content"
 :class="!isshow ? 'sl':undefined"
 >
    {{ mock('@cword(300)') }}
</div>
<button class="more" @click="isshow=!isshow">{{ isshow? '收起简介':'展开简介' }}</button>
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { 
   
    return Mock.mock(str) }

//#endregion
const isshow=ref(false)



</script>
<style scoped>
.leftmain_videodesc {
   border-bottom: 2px solid #e3e5e7;
   background-color: #fff;
    margin: 16px 0;
    width: 100%;
    /* background-color: aqua; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
color: #18191c;
}
.leftmain_videodesc .content{
    margin-bottom: 5px;
    width: 100%;
   
    flex-grow: 1;
    overflow: hidden;
    font-size: 15px;
   
}
.leftmain_videodesc .sl{
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
}
.leftmain_videodesc .more{
    color: #61666d;
    /* height: 18px; */
    background: none;
    border: none;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 13px;
}
</style>
