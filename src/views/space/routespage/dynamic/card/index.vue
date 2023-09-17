<template>
<div class="header">
<div class="img">
  <a href="#">
    <img src="@\assets\images\头像.png" alt="">
  </a>
</div>
<div class="title">
<h3>{{ mock('@cword(4,10)') }}</h3>
<span class="desc">{{ mock('@datetime(yyyy-MM-dd)') }}更新动态</span>
</div>
</div>
<dynamic_video v-if="isvideo"></dynamic_video>
<!-- <dynamic_article v-if="!isvideo"></dynamic_article> -->
</template>
<script setup>
// #region  引入组件
import dynamic_video from './video.vue'
import dynamic_article from './article.vue'

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
const isvideo=ref(true)

//#endregion

</script>
<style scoped>
.header{
    height: 50px;
    width: 100%;
    /* background-color: orangered; */
    /* background-color: #fff; */
    display: flex;
    justify-content: flex-start;
}
.header .img{
    /* background-color: orchid; */
    height: 100%;
    display: flex;
   width: 100px;
   justify-content: flex-end;
   align-items: center;
}
.header .img img{
    height: 50px;
    width: 50px;
    border-radius: 50%;
}
.header .title{
    margin-left: 20px;
    /* background-color: orchid; */
    height: 100%;
    display: flex;
flex-direction: column;
justify-content: space-between;
align-items: flex-start;
}
.header .title h3{
    font-weight: normal;
    font-size: 18px;

}
.header .title .desc{
    font-size: 12px;
    color: #99a299;
}

</style>
