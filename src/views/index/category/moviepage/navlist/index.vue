<template>
    <ul class="moviepage_navlist">
        <div class="map hot">
            <div class="title">
                <h3>{{ mock('@cword(2)') }}</h3>
                <a href="#" class="more">
                    <span>全部</span>
                    <i class="colourless gengduo"></i>
                </a>
            </div>
            <ul class="items">
                <li v-for="index in mock({ 'num|4': 4 }).num">
                    <a href="#">{{ mock('@cword(2,4)') }}</a>
                </li>
            </ul>
        </div>
        <div class="map style">
            <div class="title">
                <h3>{{ mock('@cword(2)') }}</h3>
                <a href="#" class="more">
                    <span>全部</span>
                    <i class="colourless gengduo"></i>
                </a>
            </div>
            <ul class="items">
                <li v-for="index in mock({ 'num|10': 10 }).num">
                    <a href="#">{{ mock('@cword(2,4)') }}</a>
                </li>
            </ul>
        </div>
        <div class="map category">
            <div class="title">
                <h3>{{ mock('@cword(2)') }}</h3>
                <a href="#" class="more">
                    <span>全部</span>
                    <i class="colourless gengduo"></i>
                </a>
            </div>
            <ul class="items">
                <li v-for="index in mock({ 'num|10': 10 }).num">
                    <a href="#">{{ mock('@cword(2,4)') }}</a>
                </li>
            </ul>
        </div>
        <div class="map other">
            <div class="title">
                <h3>{{ mock('@cword(2)') }}</h3>
                <a href="#" class="more">
                    <span>全部</span>
                    <i class="colourless gengduo"></i>
                </a>
            </div>
            <ul class="items">
                <li v-for="index in mock({ 'num|4': 4 }).num">
                    <a href="#">{{ mock('@cword(4)') }}</a>
                </li>
            </ul>
        </div>
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
.moviepage_navlist {
    width: 95%;
    margin-top: 10px;
    /* background-color: teal; */
    display: flex;
    /* align-items: center; */
    /* 
    :style="pageconfigStore.dynamicWH(undefined,{normal:86,max:92,min:86})"
    */
  justify-content: flex-start;
    min-height: 86px;
    max-height: 92px;
    height: 13vh;
}

.map {
    margin-right: 30px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    /* background-color: blueviolet; */
}

.map:last-child {
    margin-right: 0;
}

.map .title {
    display: flex;
    /* background-color: thistle; */
    align-items: center;

}

.map .title h3 {
    color: #ffffff;
    font-size: 20px;
    margin-right: 6px;
}

.map a.more {
    font-size: 16px;
    color: #ffffff;
}

.map a.more:hover {
    color: #0aaeec;
}

.map .items {
    /* background-color: cadetblue; */
    display: grid;
    grid-template-rows: repeat(2, 1fr);

    grid-row-gap: 10px;
    grid-column-gap: 20px;
}

.map.hot .items,
.map.other .items {
    grid-template-columns: repeat(2, auto);
}

.map.category .items,
.map.style .items {
    grid-template-columns: repeat(5, auto);
}

.map .items a {
    color: #ffffff;
}

.map .items a:hover {
    color: #0aaeec;
}
</style>
