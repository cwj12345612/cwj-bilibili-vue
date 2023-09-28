<template>
    <ul class="content">
        <li
        v-for="index in 15"
         >
        
        <div class="img">
            <a href="#">
                <img src="@/assets\images\spacepage\订阅\2.webp" alt="">
            </a>
        </div>
        <div class="sys">
            <h3>
                <a href="#">
                    {{ mock('@cword(100)') }}
                </a>
            </h3>
            <p>
                {{ mock('@cword(1000)') }}
            </p>
            <div class="type">
                <span>电影</span>
                <span>|</span>
                <span>美国</span>
            </div>
            <div class="jindu">
                <span>{{ `看到36:45` }}</span>
                <span>|</span>
                <span>{{ `时长2:34:32` }}</span>
            </div>
            <div class="setting">
                <span>
                    <i class="colourless diandiandianshu"></i>
                </span>
            </div>
        </div>
        </li>
    </ul>
    <page
    class="page"
    :style="pageconfigStore.dynamicWH({normal:534,max:539.5,min:534})"></page>
</template>
<script setup>
// #region  引入组件
import page from '@/components/page'
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
.content {
    margin-bottom: 20px;
    width: 100%;
    /* background-color: orchid; */
    /* height: 100%; */
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 15px;
    grid-row-gap: 20px;

}

.content li {
    width: 100%;
    height: 140px;
    display: grid;
    gap: 10px;
    grid-template-columns: 1fr 3fr;
    grid-template-rows: 100%;
}
li .img{
    height: 100%;
   position: relative;
}
.sys{
    overflow: hidden;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;
}
.sys h3 a{
    color: #222;
    width: 100%;
    font-weight: normal;
    font-size: 18px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.sys h3 a:hover{
    color: #0aaee0;
}

.sys p{
    font-size: 12px;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.sys  span{
   margin-left: 10px;
   font-size: 12px;
   color: #999;
}
.sys .setting{
    width: 100%;
    display: flex;
    justify-content: flex-end;
    align-items: center;
}
.sys .setting span{
    cursor: pointer;
    font-size: 16px;
}
.sys .setting span:hover{
    color: #0aaee0;
}
.page{
    
    margin: 0 auto;
}
</style>
