<template>
    <div class="all">
        <div class="header">
            <div class="weekly">
                <div class="t"
                 @click.prevent="shownav = !shownav">
                    <h5>{{ '第' + 10086 + '期' }}</h5>
                    <i class="colourless xialaxiao"></i>
                </div>
                <ul class="items" v-if="shownav">
                    <li v-for="index in 30">
                        <h3><router-link :to="{
                            path: '/popular/history',
                            query: { num: 10086 }
                        }">
                                {{ mock('@cword(5,20)') }}
                            </router-link></h3>
                        <div class="date">
                            <span>2021第10期 </span>
                            <span> 10.10~10.17</span>
                        </div>
                    </li>
                </ul>
            </div>
            <span style="margin-left: 30px;">每周五晚12点刷新</span>
        </div>
        <ul class="content">
            <li v-for="index in mock('@integer(50,100)')">
                <div class="img">
                    <a href="/play">
                        <img src="@\assets\images\初夏之星.png" alt="">
                    </a>
                </div>
                <div class="sys">
                    <h4>
                        <a href="/play">
                            {{ mock('@cword(5,100)') }}
                        </a>
                    </h4>
                    <div class="desc">
                        <span class="up">
                            <a href="/space">
                                <i class="colourless UPzhu"></i>
                                {{ mock('@cword(4,10)') }}
                            </a>
                        </span>
                        <div class="other">
                            <span>
                                <i class="colourless bofangshu"></i>
                                {{ mock("@integer(1000,10000)") }}
                            </span>
                            <span>
                                <i class="colourless danmushu"></i>
                                {{ mock("@integer(1000,10000)") }}
                            </span>
                        </div>
                    </div>
                </div>
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
const shownav = ref(false)
//#endregion
watch(()=>route.query,(nv)=>{
    shownav.value=false
if(!nv.num){

}else{
   const num= nv.num

}
},{immediate:true})
</script>
<style scoped>
.all {
    /* background-color: aqua; */
    width: 90vw;

    min-width: 1070px;
    max-width: 1280px;

}

.all .header {
    /* background-color: antiquewhite; */
    margin-top: 10px;
    margin-bottom: 15px;
    display: flex;
}

.weekly {
    position: relative;

}

.weekly .t {
    font-weight: normal;
    cursor: pointer;
    display: flex;
    align-items: center;
}

.weekly .items {

    position: absolute;
    left: 0;
    top: 25px;
    max-height: 300px;
    overflow: auto;
    /* width: 200px; */
    width: 200px;
    background-color: #fff;
    /* background-color: palevioletred; */
}

.weekly .items li {

    padding: 6px 14px;
    display: flex;
    flex-direction: column;
}

.weekly .items li h3 a {
    color: #212121;
    display: block;
    font-weight: normal;
    font-size: 16px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}

.weekly .items li h3 a:hover {
    color: #0aaee0;
}

.weekly .items li .date {
    display: flex;
    font-size: 13px;
    color: #99a299;
}

.all .header>span {
    font-size: 14px;
    color: #99a299;
}

.all .content {
    width: 100%;

    /* height: 1000px; */
    /* background-color: cadetblue; */
    display: grid;
    grid-template-columns: repeat(2, 1fr);

    /* gap: 20px; */
    grid-column-gap: 20px;
    grid-row-gap: 30px;
}

.all .content li {
    height: 150px;
    /* background-color: chocolate; */
    display: flex;

}

.all .content li .img {
    height: 100%;
    aspect-ratio: 16/9;
    margin-right: 15px;
}

.all .content li .sys {
    /* background-color: gold; */
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}

.all .content li .sys h4 a {
    color: #212121;
    font-weight: normal;
    font-size: 14px;
}

.all .content li .sys .desc .up a {
    font-size: 14px;
    color: #99a299;
}

.all .content li .sys .desc .other {
    margin-top: 10px;
    font-size: 12px;
    color: #99a299;
}

.all .content li .sys .desc .other span {
    margin-right: 30px;
}

.all .content li .sys h4 a:hover,
.all .content li .sys .desc .up a:hover {
    color: #0aaee0;
}
</style>
