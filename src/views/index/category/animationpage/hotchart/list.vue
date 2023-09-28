<template>
<ul class="list">

<li v-for="index  in 7">
<div class="img">
    <a href="/play">
        <img src="@/assets/images/anime_hotchart1.webp" alt="">
    </a>
</div>
<div class="desc" :style="`background-color:${mock('@color()')}`">
 <div class="num" :style="`color:${mock('@color()')}`">
    {{ index }}
 </div>
<div class="content" >
<div class="title">
   <a href="/play">
    {{ mock('@cword(5)') }}
   </a>
</div>
<div class="sys">
    {{ mock('@cword(5)') }}
</div>
</div>
</div>
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
    /* background-color: aqua; */
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-template-rows: 100%;
    grid-column-gap: 20px;
   
    overflow: hidden;
 
}
li{
  overflow: hidden;
    border-radius: 8px;
    /* background-color:chocolate; */
display: flex;
flex-direction: column;
}
.img{
    width: 100%;
    height: 80%;
    border-radius: 8px;
    overflow: hidden;
   
}
.desc{
    width: 100%;
    height: 20%;
    display: flex;

}
.num{
    width: 44px;
   
    font-size: 30px;
display: flex;
align-items: center;
justify-content:center;
font-style:oblique;
}
.title{
    padding-top: 10px;
    font-size: 15px;

}
.title a{
    color: #18191c;
}
.title a:hover{
    color: #0aaeec;

}
.sys{
    margin-top: 4px;
    font-size: 13px;
    color: rgb(118, 119, 126);
}
</style>
