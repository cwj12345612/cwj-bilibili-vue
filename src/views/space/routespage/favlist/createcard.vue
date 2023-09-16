<template>
    <div class="createcard">
        <div class="header">
            <div class="img">
                <img src="@\assets\images\spacepage\收藏\1.webp" alt="">
            </div>
            <div class="sys">
                <h4 class="title">
                   {{ title }}
                </h4>
                <span class="author">
                    创建者: {{ mock('@cword(4,10)') }}
                </span>
                <span class="type">
                    {{ mock('@integer(4,100)') + '个内容' }} · {{ `私密` }}
                </span>
                <button class="playall">
                    <i class="colourless bofangqi-bofang"></i>
                    <span>播放全部视频</span>
                </button>
            </div>
        </div>
        <div class="content">
            <div class="content_header">
                <ul>
                    <li>
                        <span>批量操作</span>
                    </li>
                    <li>
                        <span>全部分区</span>
                        <i class="colourless xialaxiao"></i>
                    </li>
                    <li>
                        <span>最近收藏</span>
                        <i class="colourless xialaxiao"></i>
                    </li>
                </ul>
                <div class="search">
                    <button class="left">
                        <span>当前</span>
                        <i class="colourless xialaxiao"></i>
                    </button>
                    <input type="search" placeholder="请输入搜索内容">
                    <button class="icon">
                        <i class="colourless sousuo"></i>
                    </button>
                </div>
            </div>
            <ul class="items">
                <li
                v-for="index  in mock('@integer(3,30)')"
                >
            <div class="img">
               <a href="/play">
                <img src="@\assets\images\spacepage\收藏\1.webp" alt="">
               </a>
            </div>
            <div class="title">
               <a href="#">
                {{ mock('@cword(100)') }}
               </a>
            </div>
            <div class="meta">
                <span>
                    收藏于 {{ mock('@datetime(yyyy-MM-dd)') }}
                </span>
                <span class="setting">
                    <i class="colourless diandiandianshu"></i>
                </span>
            </div>
            </li>
            </ul>
<page></page>
        </div>
    </div>
</template>
<script setup>
// #region  引入组件
import page from '@/components/page'
//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount,defineProps } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const title=ref('默认收藏夹')
watch(()=>route.params,()=>{
    // console.log(route.params)
   title.value=mock('@cword(4,100)')
},{immediate:true})

//#endregion
watch(()=>route.params,()=>{
    // console.log(route.params)
},{immediate:true})
</script>
<style scoped>
.createcard {
    /* background-color: #fff; */
    width: 100%;
    padding: 20px;
  
    /* background-color: orange; */
}

.createcard .header {
    padding-bottom: 20px;
    border-bottom: 2px solid #99a2aa;
    height: 140px;
    background-color: #fff;
    display: flex;
width: 100%;
}

.createcard .header .img {
    flex-shrink: 0;
    border-radius: 8px;
    overflow: hidden;
    height: 100%;
    width: 18%;
}

.createcard .header .sys {
    margin-left: 20px;
    background-color: #fff;
    height: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}

.sys h4 {
    font-weight: normal;
    font-size: 14px;
    color: #212121;

}

.sys>span {
    color: #99a2aa;
    font-size: 14px;
}

.sys .playall {
    color: #fff;
    padding: 8px 20px;
    border-radius: 6px;
    border: none;
    background-color: #0aaee0;
}

.content {
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
}

.content_header {
   align-self: flex-end;
    height: 50px;
    background-color: #fff;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}

.content_header ul {

    display: flex;

}

.content_header ul li {
    cursor: pointer;
    margin-left: 10px;
}

.content .search {
    border: 1px solid #99a2aa;
    width: 230px;
    height: 30px;
    border-radius: 15px;
    margin-left: 40px;
    background-color: #fff;
    display: flex;
    align-items: center;
    justify-content: space-between;
    overflow: hidden;
}

.content .search input {

    flex-shrink: 1;
    /* background-color: brown; */
    width: 60%;
    height: 100%;
}

.content .search button.left {
    flex-shrink: 0;
    color: #99a2aa;
    padding: 0 5px;
    height: 100%;

    background: none;
    border: none;
    border-right: 1px solid #99a2aa;
}

.content .search button.left:hover {
    color: #0aaee0;
}

.content .search button.icon {
    flex-shrink: 0;
    font-size: 20px;
    padding: 0 5px;
    height: 100%;
    background: none;
    border: none;
    color: #99a2aa;
}

.content .search button.icon:hover {
    color: #0aaee0;
}
.content .items{
    margin-bottom: 20px;
    /* background-color: darkkhaki; */
    width: 100%;
    /* height: 300px; */
    display: grid;
    grid-column-gap: 15px;
    grid-row-gap: 20px;
    grid-template-columns: repeat(5,1fr);
}
.content .items li{
    height: 180px;
display: flex;
flex-direction: column;
align-items: flex-start;
justify-content: space-between;
}
.content .items li .img{
    width: 100%;
    position: relative;
    height: 60%;
    border-radius: 8px;
    overflow: hidden;
}
.content .items li .title a{
    color: #222;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    font-size: 12px;
}
.content .items li .title a:hover{
    color: #0aaee0;
}
.content .items li .meta{
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #99a2aa;
    font-size: 12px;
}
.content .items li .meta .setting{
cursor: pointer;
}
</style>
