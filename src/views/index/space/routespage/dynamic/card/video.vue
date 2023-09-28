<template>
<div class="content">
<div class="tag">
   <a href="#">
    # {{ mock('@cword(4,20)') }}
   </a>
</div>
<div class="video">
    <div class="img">
    <a href="/play">
        <img src="@\assets\images\spacepage\合集\1.webp" alt="">
    </a>
    </div>
    <div class="desc">
        <h3><a href="/play">{{ mock('@cword(100)') }}</a></h3>
        <p>{{ mock('@cword(1100)') }}</p>
        <div class="other">
            <span>
                <i class="colourless bofangshu"></i>
                {{ mock('@integer(100,10000)') }}
            </span>
            <span>
                <i class="colourless danmushu"></i>
                {{ mock('@integer(100,10000)') }}
            </span>
        </div>
    </div>
</div>
<ul class="setting">
    <li>
        <i class="colourless fenxiang"></i>
        <span>{{ mock('@integer(40,1000)') }}</span>
    </li>
    <li>
        <i class="colourless _ico_reply"></i>
        <span>{{ mock('@integer(40,1000)') }}</span>
    </li>
    <li>
        <i class="colourless zan"></i>
        <span>{{ mock('@integer(40,1000)') }}</span>
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
.content{
  background-clip: content-box;
    /* background-color: thistle; */
    background-color: #fff;
    width: 100%;
    height: 100%;
    padding-left: 120px;
    display: flex;
    flex-direction: column;
align-items: flex-start;
justify-content: flex-start;
}
.content .tag{
    margin-top: 10px;
    margin-bottom: 10px;
}
.content .tag a{
    font-size: 14px;
    color: #0aaee0;
}
.content .video{
    margin-bottom: 10px;
    height: 130px;
    width: 520px;
    /* background-color: crimson; */
    background-color: #fff;
    border-radius: 8px;
    border: 1px solid #e6e7e8;
    overflow: hidden;
    display: flex;
}
.content .video .img{
    flex-shrink: 0;
    width: 180px;
    height: 100%;
    position: relative;
}
.content .video .desc{
    overflow: hidden;
    margin-left: 20px;
display: flex;
flex-direction: column;
justify-content: space-evenly;
align-items: flex-start;
/* background-color: darkmagenta; */
height: 100%;
}
.content .video .desc h3{
   width: 100%;
    font-weight: normal;
    font-size: 16px;
    color: #222;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.content .video .desc h3 a:hover{
color: #0aaee0;
}
.content .video .desc h3 a{
    font-weight: normal;
    font-size: 16px;
    color: #222;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.content .video .desc p{
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
font-size: 12px;
color: #99a299;

}
.content .video .desc .other{
    /* background-color: aquamarine; */
font-size: 12px;
color: #99a299;
width: 50%;
display: flex;
align-items: center;
justify-content: space-between;
}
.setting{
display: flex;
align-items: center;
justify-content: flex-start;
}
.setting li{
    margin-right: 30px;
    font-size: 14px;
    color: #99a299;
    cursor: pointer;
}
.setting li:hover{
    color: #0aaee0;
}
</style>
