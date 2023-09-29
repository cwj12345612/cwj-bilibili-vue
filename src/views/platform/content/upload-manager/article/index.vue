<template>
    <div class="article">
        <div class="header">
            <ul class="list">
                <li v-for="(li,index) in list">
                    <router-link 
                    :to="li.href"
                    >{{ li.title }}</router-link></li>
              
            </ul>

        </div>
        <router-view></router-view>
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
const list=[
    {id:mock('@id()'),title:'视频管理',href:'/platform/upload-manager/article/video'},
    {id:mock('@id()'),title:'专栏管理',href:'/platform/upload-manager/article/text'},
    {id:mock('@id()'),title:'音频管理',href:'/platform/upload-manager/article/audios'},
]
//#endregion

</script>
<style scoped>
.article {
  
    width: 100%;
    /* height: 100%; */
    /* background-color: cadetblue; */
}

.article .header {
    padding-left: 40px;
    padding-right: 20px;
    height: 50px;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    /* background-color: chocolate; */
    background-color: #fff;
    border-bottom: 1px solid #e6e7e8;
}

.article .header .list {
    height: 100%;
    display: flex;
}

.article .header .list li {
    display: flex;
    align-items: center;
    height: 100%;
    margin-right: 15px;
    font-size: 16px;
    cursor: pointer;
}

.article .header .list li:has(a.router-link-active) {
    border-bottom: 3px #0aaee0 solid;
    color: #0aaee0;
}
</style>
