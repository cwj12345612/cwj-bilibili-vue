<template>
<div class="homepage_categoryitems">
<div class="title">
    <div class="logo">
        <i :class="ca.icon"></i>
        <span>{{ ca.title }}</span>
    </div>
    <div class="buttons">
        <button class="change">
            <i class="colourless shuayishua"></i>
            <span>换一换</span>
        </button>
        <a class="more" href="/movie">
            <span>查看更多</span>
            <i class="colourless gengduo"></i>
    </a>
    </div>
</div>
<ul class="items">
<li v-for="index in mock({'num|5-8':8}).num">
    <videocard></videocard>
</li>
</ul>
</div>
</template>
<script setup>
// #region  引入组件
import videocard from '@/components/card/videocard.vue'
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
const calist=[
    {icon:'colour dianying',title:'电影'},
    {icon:'colour dianshiju',title:'电视剧'},
    {icon:'colour guochandonghuatuijian',title:'动画'},
    {icon:'colour yule',title:'纪录片'},
]
const ca=computed(()=>{
    return calist[Math.floor(calist.length*Math.random())]
})
//#endregion

</script>
<style scoped>
.homepage_categoryitems{
    grid-column: span 4;
    /* background-color: orange; */
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-gap: 20px;
    grid-template-rows: 50px 1fr;
}
.homepage_categoryitems .title {
    grid-column: span 4;
    /* background-color: cadetblue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
   
}
.homepage_categoryitems .title .logo{
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 20px;
}
.homepage_categoryitems .title .logo i{
    font-size: 20px;
}
.homepage_categoryitems .title .buttons  {
height: 100%;
display: flex;
align-items: center;
justify-content: space-between;
}
.homepage_categoryitems .title .buttons button{
background-color: #fff;
    padding: 8px 10px;
    margin-right: 5px;
    border: 1px  solid #e3e5e7;
    color: #2f3032;
    border-radius: var(--border-radius-max);
}
.homepage_categoryitems .title .buttons a{
    padding: 8px 10px;
    margin-right: 5px;
    border: 1px  solid #e3e5e7;
    color: #2f3032;
    border-radius: var(--border-radius-max);
}
.homepage_categoryitems .items{
    /* background-color: darkcyan; */
    grid-column: span 4;
    display: grid;
    grid-template-columns: repeat(4,1fr);
    grid-template-rows: repeat(2,1fr);
    grid-gap: 20px;
}
</style>
