<template>
<div class="spacepage_subscription">
   <div class="header">
    <div class="left">
        <h3>我的订阅</h3>
        <ul>
            <li >
                <router-link to="/space/subscription/bangumi" >
                    追番
                </router-link>
            </li>
            <li>
                <router-link to="/space/subscription/cinema"  >
                    追剧
                </router-link>
            </li>
            <li>
                <router-link to="/space/subscription/label" >
                    标签
                </router-link>
            </li>
        </ul>
    </div>
    <div class="fiter">
        <span>筛选: </span>
        <div class="btn">
            <span>全部</span>
            <i class="colourless xialaxiao" ></i>
        </div>

    </div>
   </div>
   <router-view></router-view>
</div>
</template>
<script setup>
// #region  引入组件
import spacepage_subscription_bangumi from './bangumi.vue'
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
.spacepage_subscription{
  
  
    /* background-color: cadetblue; */
   width: 100%;
}
.spacepage_subscription .header{
    margin-bottom: 15px;
    height: 40px;
    /* background-color: chocolate; */
    display: flex;
    align-items: center;
    padding: 0 30px 0 20px;
    justify-content: space-between;
}
.header .left{
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header .left h3{
    font-weight: normal;
    font-size: 20px;
    color: #222;
    margin-right: 20px;
}
.header .left ul {
   height: 100%;
 
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header .left ul li{
    padding-bottom: 5px;
height: 100%;
    margin-right: 15px;
  
}
.header .left ul li a{
    height: 100%;
    color: #222;
    font-size: 14px;
}
.header .left ul li a:hover{
    color: #0aaee0;
}
.header .left ul li:has(>a.router-link-active){
    border-bottom: 2px solid #0aaee0;
}
.header .fiter{
display: flex;
align-items: center;
justify-content: space-between;
}
.header .fiter .btn{
    cursor: pointer;
    margin-left: 10px;
   display: flex;
   align-items: center;
}
.header .fiter .btn i{
   
    transition: all 0.3s;
}
.header .fiter .btn:hover i
{
    transform: rotate(180deg);
}
.header .fiter .btn:hover {
    color: #0aaee0;
}

</style>
