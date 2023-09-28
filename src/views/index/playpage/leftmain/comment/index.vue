<template>
<div class="leftmain_comment">
    <div class="navbar">
        <div class="count">
            <h3 class="nav">评论</h3>
            <span>{{ mock({'num|100-9999':9999}).num }}</span>
        </div>
        <div class="type">
            <span class="hot checked">最热</span>
            <span style="cursor: none;">|</span>
            <span class="new">最新</span>
        </div>
    </div>
<comment_sendinput></comment_sendinput>
<ul class="comment_cards">

    <comment_card v-for="index in mock({'num|2-10':10}).num"></comment_card>

</ul>
</div>
</template>
<script setup>
// #region  引入组件
import comment_sendinput from './sendinput.vue'
import comment_card from './commen_card.vue'
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
.leftmain_comment{
    margin-top: 20px;
  max-height: 800px;
    /* background-color: thistle; */
    flex-grow: 1;
    flex-shrink: 1;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}
.leftmain_comment .navbar{
    /* background-color: teal; */
    display: flex;
    align-items: center;
}
.navbar .count{
    margin-right: 20px;
    display: flex;
    align-items: center;
}
.navbar .count .nav{
    color: #18191c;
    font-size: 20px;
    margin-right: 5px;
}

.navbar .type  span{
    cursor: pointer;
    margin-right: 5px;
}
.navbar .type span.checked{
    color: #00aacc;
   font-size: 19px;
}
.comment_cards{

   overflow: auto;
    flex-grow: 1;
    width: 100%;
    flex-shrink: 1;
    /* background-color: orangered; */
}
.comment_cards::-webkit-scrollbar{display: none;}
</style>
