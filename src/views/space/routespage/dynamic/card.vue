<template>
<div class="card">
    <div class="header">
       <div class="up">
        <div class="img">
       <a href="#">
        <img src="@\assets\images\头像.png" alt="">
       </a>
       </div>
       </div>
    </div>
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
.card{
    height: 260px;
    background-color: coral;
   width: 100%;
    border: 1px solid #99a299;
    border-radius: 8px;
    margin-bottom: 10px;
}
.card .header{
    height: 60px;
    width: 100%;
    background-color: chartreuse;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.card .header .up{
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    margin-right: 20px;
}
.card .header .img{
 
   background-color: chocolate;
   height: 48px;
   width: 48px;
   border-radius: 50%;
}
.card .header .img img{
   border-radius: 50%;
}
</style>
