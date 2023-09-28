<template>
<div class="coin">
    <div class="top">
            <h3>最近投币视频</h3>
            <a href="#">
                <span>全部</span>
                <i class="colourless gengduo"></i>
            </a>
        </div>
        <ul class="list">

            <li  v-for="index in 7">
                <div class="img">
                  <a href="#">
                    <img src="@\assets\images\spacepage\homepage\coin1.webp" alt="">
                  </a>
                </div>
                <div class="title">
                  <a href="#">
                    {{ mock('@cword(50)') }}
                  </a>
                </div>
                <div class="desc">
                    <span>
                        <i class="colourless bofangshu"></i>
                        4.9万
                    </span>
                    <span>
                        <i class="colourless danmushu"></i>
                        {{ mock('@integer(100,1000)') }}
                    </span>
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
.coin{
    margin-top: 20px;
    width: 100%;
    background-color: #fff;
    padding-bottom: 20px;
    border-bottom: 1px solid #b8c0cc;
/* height: 400px; */
}

.coin .top{
   margin-bottom: 10px;
   width: 100%;
   display: flex;
   /* background-color: aquamarine; */
   justify-content: space-between;
   align-items: center;
}
.top h3{
    font-size: 20px;
}
.coin .top>a{
   color: #6d757a;
   background-color: #fff;
   border: 1px solid #b8c0cc;
   padding: 2px 5px;
   border-radius: 6px;
}
.list{
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(5,1fr);
}
.list li{
    height: 165px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;

}
li .img{
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    height: 60%;
}
li .title{
    width: 100%;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
li .title a{
    font-size: 12px;
    color: #18191c;

}
li .title a:hover{
    color: #0aaeec;
}
.desc{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.desc span{
    font-size: 12px;
    color: #999999;
}
</style>
