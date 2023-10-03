<template>
    <div class="header">
        <div class="left">
            <h3>合集和列表</h3>

        </div>
        <div class="right">
            <div class="create">
                <i class="colourless tianjia"></i>
                <span>新建合集和列表</span>
            </div>
            <ul>
                <li>网格</li>
                <li>列表</li>
            </ul>
        </div>
    </div>
    <ul class="items">
        <li v-for="index in 9" >
            <div class="img">
                <router-link :to="`/space/compilations/${mock('@id()')}`">
                    <img src="@\assets\images\spacepage\合集\1.webp" alt="">
                    <div class="num">
                        <span class="count">12</span>
                        <span>
                            <i class="colourless shoucangjia"></i>
                        </span>
                        <span class="logo">
                            <i class="colourless bofangshu"></i>
                        </span>
                    </div>
                </router-link>
            </div>
            <h3 class="title">
               <router-link
               :to="`/space/compilations/${mock('@id()')}`">
                {{ mock('@cword(100)') }}
               </router-link>
            </h3>
            <div class="desc">
                <span>{{ mock('@datetime(yyyy-MM-dd)') }}</span>
            </div>
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
.header {
    width: 100%;
    height: 50px;
    /* background-color: cadetblue; */
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.header .left h3 {
    font-weight: normal;
    font-size: 18px;
    margin-right: 15px;
}

.header .left {
    display: flex;
    align-items: center;
}

.header .right {
    display: flex;
}

.header .right .create {
    cursor: pointer;
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 12px;
    /* margin-right: 20px; */
    padding-right: 20px;
    border-right: 2px solid #99a299;
}

.header .right .create:hover,

.header .right ul li:hover {
    color: #0aaee0;
}

.header .right ul {
    display: flex;
    align-items: center;
}

.header .right ul li {
    cursor: pointer;
    margin-left: 20px;
}

.items {
   
    /* flex-grow: 1; */
    width: 100%;
    /* background-color: darkolivegreen; */
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(6, 1fr);

}

.items li {
 width: 100%;
    aspect-ratio: 1;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: space-between;

}

.items li .img {
    border-radius: 6px;
    overflow: hidden;
    width: 100%;
    height: 60%;
    position: relative;
}

.items li .img .num {

    position: absolute;
    background: rgba(0, 0, 0, 0.6);
    height: 100%;
    width: 40%;
    top: 0;
    right: 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

li .img .num span {
    color: #fff;
    font-size: 16px;
    margin-top: 5px;
}

li .img i {
    font-size: 20px;
}

li .img .num span.logo {

    align-self: flex-end;
    margin-right: 5px;
}
.items li .title a{
    font-weight: normal;
    font-size: 12px;
    color: #222;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
}
.items li .title a:hover{
    color: #0aaee0;
}
.items li .desc{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    font-size: 12px;
    color: #999;
}
</style>
