<template>
    <div class="rankinglist">
        <div class="title">
            <h2>排行榜</h2>
            <button class="more">
                <span>更多</span>
                <i class="colourless gengduo"></i>
            </button>
        </div>
        <ul class="list">
            <li v-for="index in 10">
            <a href="#">
                <h4>{{ index }}</h4>
                <span>{{ mock('@cword(40)') }}</span>
            </a>
            </li>
        </ul>
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

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.rankinglist {
    grid-column: span 1;
    /* background-color: teal; */
    display: grid;
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: 50px 1fr;
    grid-row-gap: 20px;
}

.rankinglist .title {
    /* background-color: aqua; */
    display: flex;
    justify-content: space-between;
    align-items: center;

}

.rankinglist .more {
    padding: 8px;
    border-radius: var(--border-radius-max);
    border: 1px solid #e3e5e7;

}
.rankinglist .list{
      border-radius: 8px;
      overflow: hidden;
    border: 1px solid  #e3e5e7;
    /* background-color: orange; */
    display: grid;
    grid-template-columns: 100%;
    grid-template-rows: repeat(10,1fr);

}
.rankinglist .list li{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
  padding: 0 10px;
}
.rankinglist .list li a{
    /* background-color: antiquewhite; */
    display: grid;
    grid-column-gap: 15px;
    grid-template-columns: 30px 1fr;

}
.rankinglist .list li:hover a span,
.rankinglist .list li:nth-child(n+4):hover a h4
{
      color: rgb(0, 174, 236);
}
.rankinglist .list li a h4{
  font-style: oblique;
  
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.rankinglist .list li a span{
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
    color: #18191c;
}
.rankinglist .list li:first-child  h4{
    color: #ff473d;
}
.rankinglist .list li:nth-child(2)  h4{
    color: #ff6a29;
}
.rankinglist .list li:nth-child(3)  h4{
    color: #ff9214;
}
.rankinglist .list li:nth-child(2n){
    background-color: #f6f7f8;
}
.rankinglist .list li:nth-child(2n-1){
    background-color: #ffffff;
}
</style>
