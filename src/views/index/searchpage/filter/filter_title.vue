<template>
    <ul class="searchpage_filtertitle">
        <li 
        v-for="index in 8" 
        :class="index == 1 ? 'checked' : undefined">
            <a href="#">
                <span class="title">{{ mock('@cword(4)') }}</span>
                <span class="count" v-if="index != 1">99+</span>
            </a>
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
.searchpage_filtertitle {
    width: 100%;
    height: 48px;
    /* background-color: goldenrod; */
    border-bottom: 2px solid #f1f2f3;
   display: flex;
align-items: center;
}
.searchpage_filtertitle li:first-child{
   
    padding-left: 0;
}
.searchpage_filtertitle li{
  height: 100%;
  padding: 0 24px;
}
.searchpage_filtertitle li a{
   
 height: 100%;
    display: flex;
 align-items: center;
}
li a span.title{
    /* background-color: thistle; */
    height: 90%;
    display: flex;
    align-items: center;
}
 li a span.count{
  border-radius: 50%;
  background-color: #e6e7e8;  
 }
 li.checked a span.title{
    color: rgb(0, 174, 236);
    border-bottom: 2px solid rgb(0, 174, 236);
 }
 li:hover span.title{
    color: rgb(0, 174, 236);
 }
</style>
