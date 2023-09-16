<template>
<div id="platform"
:style="pageconfigStore.dynamicWH({normal:1377+24*2,max:2512+24*2,min:1012+24*2})"
>
  <div class="header">
        <div class="left">
            <h3>
                <i class="colourless bilibili"></i>
                创作中心
            </h3>
            <div class="index">
                <a href="/" target="_blank">
                    <i class="colourless shouye"></i>
                主站
                </a>
            </div>
        </div>
  </div>

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

//#endregion

</script>
<style scoped>
#platform{
height: 1000px;
background-color: orange;

}
.header{
    background-color: #fff;
    height: 64px;
    width: 100%;
    /* background-color: cadetblue; */
    padding-left: 30px;
display: flex;
align-items: center;
justify-content: space-between;

}
.header .left{
    color: #0aaee0;
    display: flex;
    align-items: center;
    height: 100%;
}
.header .left .index {
cursor: pointer;
   
margin-left: 20px;
color: #99a299;
}
</style>
