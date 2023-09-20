<template>
    <ul class="searchpage_videolist"
  
    >
    <li 
   
    v-for="index in 23" 

    >
    <searchpage_videocard></searchpage_videocard>
    </li>
    </ul>
    </template>
    <script setup>
    // #region  引入组件
    import searchpage_videocard from '@/components/card/videocard.vue'
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
    .searchpage_videolist{

        margin-top: 10px;
    /* background-color: orange; */
    /* height: 400px; */
    display: grid;
    grid-row-gap: 40px;
    grid-template-columns: repeat(5,1fr);
    grid-column-gap: 20px;
    grid-template-rows: repeat(auto,minmax(203px,235px));
    /* 
      :style="pageconfigStore.dynamicWH({normal:1297,min:988,max:2028})"
    */
    max-width: 2028px;
    min-width: 988px;
    width: 90vw;
    margin-bottom: 20px;
    }
    .searchpage_videolist li{
        /* 
         :style="pageconfigStore.dynamicWH(undefined,{normal:213,max:235,min:204})"
        */
        max-height: 305px;
        min-height: 220px;
        height: 30vh;
    }
    </style>
    