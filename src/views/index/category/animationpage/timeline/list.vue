<template>
<ul class="list">
<li v-for="index in 7">
<span class="time">
    周日21:30
</span>

<div class="img">
   <a href="/play">
    <img src="@/assets/images/anime_timeline1.webp" alt="">
   </a>
</div>
<div class="title">
    <a href="/play">
        {{ mock("@cword(11)") }}
    </a>
</div>
<span class="progress">
    更新至33话
</span>
</li>

</ul>
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
.list{
    /* background-color: blueviolet; */
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: 100%;
    grid-column-gap: 20px;
    border-top: 2px rgb(235, 64, 199) solid;
}
.list li {
    /* background-color: aquamarine; */
  position: relative; 
  padding-top: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

}
.list li .time{
    position: absolute;
background-color: #fbdbf4;
color: rgb(235, 64, 199);
padding: 2px 10px;
top: 0;
transform: translateY(-50%);
border-radius: 6px;
}
li .img {
    width: 100%;
    height: 80%;
    overflow: hidden;
    border-radius: 6px;
   
}

li .title a{
   
    color: #18191c;
    font-size: 15px;
}
li .title a:hover{
    color: #0aaeec;
}
.progress{
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    font-size: 13px;
    color: #9499a0;
}
</style>
