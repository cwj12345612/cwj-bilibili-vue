<template>
 <div class="fav">
        <div class="top">
            <h3>我的收藏夹</h3>
            <a href="#">
                <span>全部</span>
                <i class="colourless gengduo"></i>
            </a>
        </div>
        <ul class="list">
            <li v-for="index in 10">
               <div class="img">
                <a href="#">
                    <img src="@/assets/images/spacepage/homepage/fav1.webp" alt="">
                </a>
               </div>
               <div class="desc">
                <div class="h4">
                   <a href="#"> {{ mock('@cword(4)') }}</a>
                </div>
                <span class="type">公开</span>
               </div>
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

//#endregion

</script>
<style scoped>

.fav{
    padding-bottom: 20px;
   border-bottom: 1px solid #b8c0cc;
   width: 100%;
   /* background-color: chocolate; */
}
.fav .top{
   margin-bottom: 10px;
   width: 100%;
   display: flex;
   justify-content: space-between;
   align-items: center;
}
.top h3{
    font-size: 20px;
}
.fav .top>a{
   color: #6d757a;
   background-color: #fff;
   border: 1px solid #b8c0cc;
   padding: 2px 5px;
   border-radius: 6px;
}
.fav .list{
   width: 100%;
   display: grid;
   grid-template-columns: repeat(5,1fr);
   gap: 20px;
   
}
.list li{
   width: 100%;
   height: 189px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}
.list .img{
   height: 80%;
   width: 100%;
   border-radius: 6px;
   overflow: hidden;
}
.list .h4 a{
   font-size: 18px;
   color: #18191c;
}
.list .desc{
   align-items: center;
   display: flex;
   width: 100%;
   justify-content: space-between;
}
.list .h4 a:hover{

   color: #0aaeec;
}
.type{
   font-size: 12px;
   color: #99a2aa;
}
</style>
