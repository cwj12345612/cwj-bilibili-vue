<template>
<div class="header">
<div class="title">
<div class="left">
    <h3><a href="/space/compilations/series">合集</a></h3>
    <span style="color: #99a299;">></span>
    <h3>{{ mock('@cword(10)') }}</h3>
</div>
<button class="right">
    <i class="colourless bofangqi-bofang"></i>
   <span> 播放全部</span>
</button>
</div>
<div class="meta">
<span>合集</span>
<span>|</span>
<span>99个视频</span>
<span>|</span>
<span>{{ mock('@datetime(MM-dd)') }}更新</span>
</div>
<p class="desc">
    {{ mock('@cword(300)') }}
</p>
<ul class="sort">
    <li class="active">默认排序</li>
    <li>升序排序</li>
</ul>
</div>
<ul class="items">

    <li
    v-for="index in 7*5-4"
   
    >
<div class="img">
   <a href="/play">
    <img src="@/assets\images\spacepage\合集\1.webp" alt="">
   </a>
</div>
<div class="title">
<a href="/play">
    {{ mock('@cword(100)') }}
</a>
</div>
<div class="desc">
<span>
    <i class="colourless bofangshu"></i>
    {{ mock('@integer(100,4000)') }}
</span>
<span>
   
    {{ mock('@datetime(yyyy-MM-dd)') }}
</span>
</div>
    </li>
</ul>
<page></page>
</template>
<script setup>
// #region  引入组件
import page from '@/components/page'
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
.header{
height: 150px;
width: 100%;
/* background-color: cadetblue; */
background-color: #fff;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
padding: 20px;
border-bottom: 1px  solid #99a299;
}
.header .title{
/* background-color: coral; */
width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
}
.header .title .left{
    display: flex;
   
    align-items: center;
}
.header .title .left h3,
.header .title .left h3 a
{
    font-weight: normal;
    font-size: 18px;
   color: #222;
}
.header .title .right{
    background-color: #fff;
    padding: 3px;
    border-radius: 3px;
    color: #99a299;
    border: 1px solid #99a299;
}
.header .meta span{
margin-right: 20px;
font-size: 12px;
color: #99a299;
}
.header .desc{
    font-size: 12px;
color: #99a299;
}
.header .sort{
    /* background-color: chartreuse; */
    display: flex;
    font-size: 14px;
  
    padding-bottom: 5px;
    width: 100%;
    justify-content: flex-end;
}
.header .sort  li{
    cursor: pointer;
    margin-left: 20px;
  color: #222;
}
.header .sort  li.active{
    color: #0aaee0;
}
.header .sort  li:hover{
    color: #0aaee0;
}
.items{
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100%;
    /* background-color: chocolate; */
    /* height: 400px; */
    display: grid;
    grid-template-columns: repeat(7,1fr);
    gap: 20px;

}
.items li{
    height: 180px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.items li .img{
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    position: relative;
    height: 65%;
}
.items li .title  a{
font-size: 12px;
color: #222;
word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.items li .title  a:hover{
    color: #0aaee0;
}
.items li .desc{
    width: 100%;
display: flex;
justify-content: space-between;
align-items: center;
font-size: 12px;
color: #99a299;
}
</style>
