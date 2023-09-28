<template>
<div class="card"
:style="pageconfigStore.dynamicWH(undefined,{normal:275,max:367,min:255})"
>

<div class="img">
    <a href="/play">
        <img src="@/assets/images/anime_hotchart1.webp" alt="">
    </a>
</div>
<div class="title">
   <a href="/play">
    {{ mock('@cword(100)') }}
   </a>
</div>
<div class="desc">
{{ mock('@cword(10)') }}
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
    /* background-color: chocolate; */
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    border-radius: 8px;
 overflow: hidden;
   
}
.card .img{
    width: 100%;
    height: 80%;
    border-radius: 8px;
    overflow: hidden;
}
.card .title{
    font-size: 15px;
width: 100%;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.card .title a{
  
    color: #18191c;
 
}
.card .title a:hover{
    color: #0aaeec;
}
.desc{
    font-size: 13px;
    color: rgb(118, 119, 126);
}
</style>
