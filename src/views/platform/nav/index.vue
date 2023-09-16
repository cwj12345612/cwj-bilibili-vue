<template>
<ul class="navlist">
<li
v-for="index  in 60"
:style="`background-color: ${mock('@color()')};`"
>
    你好
</li>
</ul>
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
.navlist{
   flex-shrink: 1;
   flex-grow: 0;
    height: 100%;
    background-color: greenyellow;
    width: 200px;
    overflow: auto;
}
.navlist li{
    width: 100%;
height: 50px;
display: flex;
align-items: center;
justify-content: flex-start;
padding-left: 30px;

}
</style>
