<template>
    <ul class="cards"
:style="pageconfigStore.dynamicWH({normal:1297,max:1780,min:1020})"
>
<li 
v-for="index in 7"
>

<div class="card"
:class="index==4 ?'checked' :undefined"
:style="`background-color: ${mock('@color()')};`"
>
<a class="card_img" href="/play">
    <img :src="require(`@/assets/images/视${mock('@integer(1,10)')}.webp`)" alt="">
<div class="title">
    {{ mock('@cword(4,30)') }}
</div>
</a>
</div>

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
 .cards{
    /* background-color: olivedrab; */
    position: absolute;   
    height: 20%;
    bottom: 0;
    display: grid;
    grid-template-columns: repeat(7,1fr);
    grid-column-gap:20px ;
    grid-template-rows: 100%;
}
.card{
    height: 100%;
    width: 100%;
    overflow: hidden;
    border-radius: var(--border-radius-max);
    position: relative;
    display: block;
  
}
.card.checked{
    transform: scale(1.1);
    border: 2px solid #fff;
}
.card .card_img{
  
    width: 100%;
    height: 100%;

}
.card .title{
    width: 100%;
    position: absolute;
    color: #fff;
    bottom: 10px;
    left: 0;
text-overflow: ellipsis;
white-space: nowrap;
overflow: hidden;
}
</style>
