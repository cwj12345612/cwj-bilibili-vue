<template>
<div class="recommand"
:style="pageconfigStore.dynamicWH({normal:1297,max:1780,min:1020})"
>
<h1 class="title">
    猜你喜欢
</h1>
<ul class="more">
<li v-for="index in parseInt(mock('@integer(60,100)'))">
    <recommand_card></recommand_card>
</li>
</ul>
</div>
</template>
<script setup>
// #region  引入组件
import recommand_card from './card.vue'
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
.recommand{
    margin-top: 50px;
/* background-color: orange; */

}
h1{
    /* background-color: burlywood; */
}
.more{
    width: 100%;
    /* background-color: cadetblue; */
  display: grid;
  /* height: 100px; */
  grid-template-columns: repeat(7,1fr);
  gap: 20px;
  /* grid-template-rows: repeat(2,1fr); */
}
li{
    /* width: 100%; */
    overflow: hidden;
}
</style>
