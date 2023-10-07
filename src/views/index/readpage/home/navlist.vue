<template>
   <div class="navlist">
            <h3 class="logo">
                <i style="font-size: 25px;" class="colourless bilibili"></i>
                <span>专栏</span>
            </h3>
            <ul class="list">
                <li      
                v-for="(li) in navlist">
                  <router-link :to="li.href">
                    <i style="font-size: 23px;" :class="li.icon"></i>
                    <span>{{li.title}}</span>
                  </router-link>
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
const navlist = reactive([
    { id: mock('@id()'), title:'推荐', href:'/read/home/recommend',icon:'colour bianjituijian' },
    { id: mock('@id()'), title:'动画', href:'/read/home/anime',icon:'colour zuixinlianzai' },
    { id: mock('@id()'), title:'游戏', href:'/read/home/game',icon:'colour youxi' },
    { id: mock('@id()'), title:'影视', href:'/read/home/film',icon:'colour keji-' },
    { id: mock('@id()'), title:'生活', href:'/read/home/life',icon:'colour shenghuo' },
    { id: mock('@id()'), title:'兴趣', href:'/read/home/interest',icon:'colour yule' },
    { id: mock('@id()'), title:'小说', href:'/read/home/fiction',icon:'colourless jiaoliuxuanzhong' },
    { id: mock('@id()'), title:'科技', href:'/read/home/science',icon:'colour suoyin' },
    { id: mock('@id()'), title:'笔记', href:'/read/home/note',icon:'colourless shoucangjia' },
    { id: mock('@id()'), title:'教程', href:'/read/home/course',icon:'colourless wodeguanzhu' },
   ])
//#endregion

</script>
<style scoped>

.navlist {
    padding-left: 30px;
    width: 200px;
    background-color: burlywood;

}

.navlist .logo {
    margin-bottom: 20px;
    color: #0aaee0;
    font-size: 25px;
}
.navlist .list{
    width: 100%;
}
.navlist .list li {
    cursor: pointer;
    margin-bottom: 30px;
}
.navlist .list li:last-child{
    margin-bottom: 0;
}
.navlist .list span {
    color: #212121;
    font-size: 20px;
    margin-left: 15px;
}
.navlist .list a.router-link-active span{
    color: #0aaee0;
}
.navlist .list li a:hover:not(.router-link-active) span {
    color: #0aaee0;
}
</style>
