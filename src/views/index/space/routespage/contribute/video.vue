<template>
<div class="contribute_video">
    <div class="header">
        <div class="left">
            <h3>我的视频</h3>
            <ul >
                <li class="active">最新发布</li>
                <li>最多播放</li>
                <li>最多收藏</li>
            </ul>
        </div>
<div class="right">
    <button class="playall">
        <i class="colourless bofangqi-bofang" ></i>
        <span>播放全部</span>
    </button>
   <ul class="type">
    <li class="now">网格</li>
    <li>列表</li>
    
   </ul>
</div>
    </div>
    <ul class="navlist">
        <li 
        v-for="index in mock('@integer(3,10)')"
        :class="index === 1 ? 'active':undefined"
        >
    <span style="margin-right: 5px;"> {{ mock('@cword(2,5)') }}</span>  
    <span class="count">{{ mock('@integer(10,100)') }}</span> 
    </li>
    </ul>

    <ul class="items">
        <li
        v-for="index in 7"
      
        >
    <div class="img">
        <a href="#">
            <img src="@\assets\images\spacepage\投稿\1.webp" alt="">
        </a>
        <div class="duration">
            10:10:10
        </div>
    </div>
    <div class="title">
        <a href="/play">
            {{ mock('@cword(3,60)') }}
        </a>
    </div>
    <div class="desc">
        <span class="playcount">
            <i class="colourless bofangshu"></i>
             {{ mock('@integer(100,3000)') }}
        </span>
        <span class="date">
          
             {{ mock('@datetime(yyyy-MM-dd)') }}
        </span>
    </div>
    </li>
    </ul>
    <page></page>
</div>

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
.contribute_video{
    padding: 20px;
    width: 100%;
    /* background-color: orangered; */
    display: flex;
    flex-direction: column;
    align-items: center;
}
.header {
   
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: burlywood; */
    height: 35px;
}
.header .left{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header .left h3{
    font-weight: normal;
    margin-right: 20px;
    font-size: 20px;
    color: #222;
}
.header .left ul{
    height: 100%;
    display: flex;
    align-items: center;
}
.header .left ul li{
    display: flex;
    align-items: center;
    height: 100%;
    cursor: pointer;
    margin-right: 20px;
   
}
.header .left ul li.active{
    color: #0aaee0;
border-bottom: 2px solid #0aaee0;
}
.header .left ul li:hover{
    color: #0aaee0;
}
.header .right{
    height: 100%;
    display: flex;
    align-items: center;
justify-content: space-between;
/* background-color: #fff; */
}
.header .right .playall{
    border-radius: 6px;
    border: 1px solid #99a2aa;
    padding: 3px 5px;
    color: #99a2aa;
    background-color: #fff;

}
.header .right .playall:hover{
    color: #0aaee0;
    border: 1px solid #0aaee0;
}
.header .right .type{
    margin-left: 20px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.header .right .type li{
    margin: 0 10px;
    cursor: pointer;
    color: #99a2aa;
}
.header .right .type li.now{
    color: #0aaee0;
}

 .navlist{
    
    background-color: #edf2f9;
    /* height: 30px; */
    width: 100%;
    border-radius: 6px;
margin-top: 10px;
display: flex;
align-items: center;
justify-content: flex-start;
flex-wrap: wrap;
}
 .navlist li{
    padding: 5px 0;
    cursor: pointer;
    margin-right: 20px;
    color: #222;
}
.navlist li span.count{
    color: #99a2aa;
}
.navlist li.active{
    color: #0aaee0;
}
.navlist li:hover{
    color: #0aaee0;
}
.items{
    margin-bottom: 20px;
    margin-top: 20px;
    /* background-color: aquamarine; */
    width: 100%;
    /* height: 400px; */
    gap: 20px;
    grid-template-columns: repeat(5,1fr);
display: grid;
}
.items li{
    height: 184px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.items li .img{
    border-radius: 6px;
    overflow: hidden;
    position: relative;
    width: 100%;
    height: 65%;
}
.items li .img .duration{
    position: absolute;
   background:rgba(0, 0, 0, 0.6);
    bottom: 0;
    right: 0;
    padding: 2px;
    color: #fff;
    border-radius: 3px;
}
.items li .title a{
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
/* background-color: blanchedalmond; */
font-size: 12px;
color: #222;
}
.items li .title a:hover{
    color: #0aaee0;
}
.items li .desc{

    display: flex;
    align-items: center;
    justify-content: flex-start;

}
.items li .desc span{
    font-size: 12px;
    color: #99a2aa;
    margin-right: 15px;
}
</style>
