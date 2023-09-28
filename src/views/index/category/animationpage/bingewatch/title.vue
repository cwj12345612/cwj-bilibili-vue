<template>
<div class="bingewatch_title">
<div class="h">
<i class="colour wodezhuifan"></i>
<h3>正在追</h3>
</div>
<button class="now">
    <i class="colour wodezhuifan"></i>
    <span>正在追番</span>
</button>
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
.bingewatch_title{
    grid-column: span 7;
 background-color: #ffffff;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.h{
display: flex;
align-items: center;

}
.h i{
    font-size: 34px;
}
.h h3{
    font-size: 24px;
    color: #000000;
}
.now{
    height: 80%;
    padding: 0 10px;
     color: #000000;
    border: 1px solid #e1e2e3;
    background-color: #ffffff;
    border-radius: var(--border-radius-max);
}
.now:hover{
    background-color: rgb(227, 229, 231);
}
</style>
