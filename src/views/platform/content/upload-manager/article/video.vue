<template>
    <div class="video_header">
        <div class="all">
            <ul class="title">
                <span class="active">全部稿件 {{ mock('@integer(10,2000)') }}</span>
                <span>草稿箱</span>
            </ul>
            <ul class="items">
                <li>进行中</li>
                <li>已通过 88</li>
                <li>未通过</li>
            </ul>
        </div>
        <div class="filter">
            <select class="ca">
                <option>全部分区</option>
                <option>游戏</option>
                <option>电视剧</option>
                <option>音乐</option>
            </select>
            <select class="other">
                <option >按投稿时间排序</option>
                <option >按播放次数排序</option>
                <option >按收藏人数排序</option>
                <option >按弹幕条数排序</option>
            </select>
        </div>
    </div>
    <ul class="videos">
        <li 
        v-for="index in 8"
        >
    
    </li>
    </ul>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.video_header {
    padding-left: 40px;
    padding-right: 20px;
    margin-top: 20px;
    height: 50px;
    width: 100%;
    background-color: thistle;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.video_header .all {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    background-color: aquamarine;
}

.video_header .all .title {
    display: flex;
}

.video_header .all .title span {
    margin-right: 20px;
    cursor: pointer;
}

.video_header .all .title span.active {
    color: #0aaee0;
}

.video_header .all .items {
    display: flex;

}

.video_header .all .items li {
    margin-right: 20px;
    color: #e6e7e8;
    font-size: 14px;
}
.video_header .filter{
    align-self: flex-start;
    background-color: cornflowerblue;
    display: flex;
}
.video_header .filter select{
    padding: 5px 10px;
    margin-left: 20px;
    border-radius: 4px;
    border: 1px solid #e6e7e8;
}
.videos{
    padding-left: 40px;
    padding-right: 20px;

}
.videos li{
    margin-bottom: 30px;
    height: 120px;
    width: 100%;
    background-color:aqua;
}
</style>
