<template>
    <div class="searchpage_filterall">
        <div class="top">
            <ul class="toplist">
                <li v-for="index in 6" :class="index == 1 ? 'checked' : undefined"><a href="#">
                        <span>{{ mock('@cword(4)') }}</span>
                    </a>
                </li>
            </ul>
            <button class="more" @click="open=!open">
                <span>更多筛选</span>
                <i class="colourless xialaxiao"></i>
            </button>
        </div>
        <div class="morelist"
        :class="open?'show':'none'"
        id="searchpage_filterall_morelist">
            <ul class="item" v-for="index in mock({ 'num|2-4': 4 }).num">
                <li class="checked">
                    <a href="#">
                        <span>{{ mock('@cword(4)') }}</span>
                    </a>
                </li>
                <div class="content">
                    <li v-for="index in mock({ 'num|7-20': 20 }).num">
                        <a href="#">
                            <span>{{ mock('@cword(2,8)') }}</span>
                        </a>
                    </li>
                </div>
            </ul>
        </div>
    </div>
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
const open = ref(false)

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
li {
    display: flex;
    justify-content: center;
    align-items: center;
}
#searchpage_filterall_morelist.show{
display: block;
animation-play-state: running;
}
#searchpage_filterall_morelist.none{
display: none;
animation-play-state: paused;
}
.searchpage_filterall {
    overflow: hidden;
    margin-top: 30px;
    /* height: 200px; */
    width: 100%;
    /* background-color: gold; */

}

.searchpage_filterall .top {
    height: 34px;
    width: 100%;
    /* background-color: chocolate; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.searchpage_filterall .top .toplist {
    height: 100%;
    display: flex;
}

.toplist li {

    height: 100%;
    padding: 0 15px;
    margin-right: 10px;
    border-radius: var(--border-radius-min);
    overflow: hidden;
}

.toplist li:hover span {
    color: rgb(0, 174, 236);
}

.toplist li span {
    /* 97, 102, 109 */
    color: rgb(97, 102, 109);
}

.toplist li.checked {
    /* 223, 246, 253 */
    background-color: rgb(223, 246, 253);

}

.toplist li.checked span {
    color: rgb(0, 174, 236);
}

.top .more {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: var(--border-radius-min);
    border: solid 2px #f1f2f3;
    background-color: #ffffff;
    color: #18191c;
}

.top .more:hover {
    background-color: rgb(227, 229, 231);
}

.top .more i {
    transition: all 0.3s;
}

.top .more.open i {
    transform: rotate(180deg);
}

@keyframes show {
    0% {
        opacity: 0
    }

    100% {
        opacity: 1
    }

}

.morelist {
    display: none;
    animation-play-state: paused;
    width: 100%;
    /* height: 0; */
    /* background-color: chartreuse; */
    animation-name: show;
    animation-duration: 3s;
    animation-fill-mode: forwards;

}

.morelist .item {
    border-bottom: solid 2px #f1f2f3;
    display: grid;
    grid-column-gap: 10px;
    grid-template-columns: 94px 1fr;
}

.morelist ul.item>li:first-child {

    margin-top: 10px;
    height: 34px;
    width: 94px;
    border-radius: var(--border-radius-min);
}

.morelist .content {
    width: 100%;
    /* background-color: orange; */
    display: flex;
    justify-content: flex-start;
    flex-wrap: wrap;
}

.morelist .content li {

    margin-right: 10px;
    margin-top: 10px;
    /* width: 94px; */
    font-size: 14px;
    height: 34px;
    border-radius: var(--border-radius-min);

    padding: 0 15px;

}

.morelist li.checked {
    background-color: rgb(223, 246, 253);

}

.morelist li.checked span {
    color: #00aeec;
}

.morelist .content li:hover span {
    color: rgb(0, 174, 236);
}</style>
