<template>
    <div class="carousel">
        <ul class="content">
            <div class="img">
            <a href="#">    <img :src="list[index].img"  alt=""></a>
                <span class="msg">
                    {{list[index].title }}
                </span>
            </div>
        </ul>
        <ul class="li">
            <li 
            @click="skip(i)"
            v-for="i in list.length" :class="i-1 == index ? 'active' : undefined"></li>
        </ul>
    </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { useRoute, useRouter } from 'vue-router'
const route = useRoute()
const router = useRouter()
// #endregion

// #region 第三方库

import axios from '@/utils/axios'

// #endregion

// #region  发送请求 正常情况应该放入onMounted

onMounted(() => {

})

// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }
const list=reactive([

{id:mock('@id()'),title:mock('@cword(5,20)'),img:require('@/assets/images/category1.webp'),url:'#'},
        {id:mock('@id()'),title:mock('@cword(5,20)'),img:require('@/assets/images/category2.webp'),url:'#'},
        {id:mock('@id()'),title:mock('@cword(5,20)'),img:require('@/assets/images/category3.webp'),url:'#'},
        {id:mock('@id()'),title:mock('@cword(5,20)'),img:require('@/assets/images/category4.webp'),url:'#'},
     
])

//当前索引
const index=ref(0)
const li=computed(()=>{
    return list[index.value]
})
onMounted(()=>{
    ca()
})
let Interval=null;
const ca=()=>{
clearInterval(Interval)
Interval=setInterval(() => {
   
   if(index.value+1==list.length){
    index.value=0
   } else{
    index.value+=1
   }

}, 3000);
}
const skip=(now)=>{
    clearInterval(Interval)
    index.value=now-1
setTimeout(() => {
  ca()
}, 1000);
}
//#endregion

</script>
<style scoped lang="less">
.carousel {
    width: 100%;
    height: 300px;
    // background-color: cadetblue;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-evenly;

    .content {
        width: 100%;
        height: 270px;
        /* background-color: burlywood; */

        .img {
            border-radius: 8px;
            overflow: hidden;
            margin: 0 auto;
            width: 90%;
            height: 270px;
            position: relative;

            .msg {
                position: absolute;
                bottom: 10px;
                left: 20px;
                color: #fff;
                font-size: 20px;

            }
        }
    }

    .li {

        display: flex;


        & li {
            cursor: pointer;
            height: 14px;
            width: 14px;
            border-radius: 50%;
            background: rgba(0, 0, 0, 0.3);
            margin-right: 10px;

            &.active {
                background-color: #0aaee0;
            }
        }
    }
}
</style>
