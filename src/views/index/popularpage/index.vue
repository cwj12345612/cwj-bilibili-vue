<template>
<div class="popular">
    <div class="img">
        <img src="@/assets/images/header.png" alt="">
        <a class="logo" href="/"

>
        <i class="colourless bilibili" ></i>
    </a>
    </div>
    <ul class="navlist">
        <li
       
        v-for="(li,index) in list">
          <a 
          :class="index==3?'active':undefined"
          :href="li.href">
            <i :class="li.icon" 
            style="font-size: 20px;"
            :style="`color: ${mock('@color()')};`"></i>
           <h4> {{li.title}}</h4>
          </a>
        </li>

    </ul>
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
const list=reactive([
    {id:mock('@id()'),title:'综合热门',href:"#",icon:'colourless shoucang'},
    {id:mock('@id()'),title:'每周必看',href:"#",icon:'colour shijianbiao'},
    {id:mock('@id()'),title:'入站必刷',href:"#",icon:'colourless yizhuifan'},
    {id:mock('@id()'),title:'排行榜',href:"#",icon:'colourless paihangbang'},
    {id:mock('@id()'),title:'全站音乐榜',href:"#",icon:'colourless yinle'},
  ])
//#endregion

</script>
<style scoped>
.popular{
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
    height: 1000px;
    width: 100%;
    background-color: orange;
}
.popular>.img{
    width: 100%;
    position: relative;
    max-height: 240px;
    min-height: 155px;
    height: 20vh;
}
.popular>.img .logo{
    max-height: 120px;
    min-height: 77.5px;
    height: 10vh;
    display: block;
    position: absolute;
    bottom: 0;
    width: 180px;
    left: 100px;
   
}
.popular>.img .logo i{
     font-size: 50px; 
     color: #ffffff;
}
.navlist{
    background-color: palevioletred;
    width: 90vw;
  
    min-width: 1070px;
    max-width: 1280px;
    height: 80px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    border-bottom: 2px solid #99a299;
}
.navlist li{
    /* background-color: aqua; */
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 30px;
}
.navlist li a{
    font-size: 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;

}
.navlist li a h4{
    font-size: 20px;
    color: #212121;
    font-weight: normal;
}
.navlist li a:hover>* {
    color: #0aaee0;
}
.navlist li a.active{
    border-bottom: 2px solid #0aaee0;
    
}
.navlist li a.active>*{
    color: #0aaee0;
}
</style>
