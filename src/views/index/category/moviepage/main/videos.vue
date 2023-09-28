<template>
<ul class="moviepage_main_videos">
<li v-for="index in 8">
    <div class="img">
        <a href="/play">
            <img :src="require(`@/assets/images/视${index}.webp`)" alt="">
        </a>
        <i>{{ mock('@float(1,10,1,1)') }}</i>
    </div>
    <div class="title">
       <a href="/play">
        {{ mock('@ctitle(4,7)') }}
       </a>
    </div>
    <div class="desc">
        {{ mock('@cword(20)') }}
    </div>
</li>

</ul>
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
.moviepage_main_videos{
    grid-row: span 2;
    grid-column: span 4;
    /* background-color: darkgoldenrod; */
    display: grid;
    grid-row-gap: 24px;
    grid-column-gap: 16px;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
}
li {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
    overflow: hidden;
}
li .img{
    width: 100%;
    border-radius: var(--border-radius-min);
    overflow: hidden;
    height: 60%;
    position: relative;
}
li .img  i {
    position: absolute;
    bottom: 0;
    right: 10px;
    color: #ffffff;
}
li .title a{
    /* background-color: chocolate; */
    color: #e1e1e1;
    font-size: 14px;
    overflow: hidden;
}
li .title:hover a{
    color: #0aaeec;
}
li .desc{
    width: 100%;
    font-size: 12px;
    color: #727272;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
</style>
