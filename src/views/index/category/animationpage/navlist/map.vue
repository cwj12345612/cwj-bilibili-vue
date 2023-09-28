<template>
<div class="navlist_map"
:style="`background-color:${mock('@color()')} ;`"
>

   <a href="#"  class="title">
    <h3>{{ mock('@cword(3,5)') }}</h3>
    <i class="colourless gengduo"></i>
   </a>
<ul class="items">
<li v-for="index in mock('@integer(2,8)')"><a href="#">{{ mock('@cword(2,4)') }}</a></li>
</ul>
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
.navlist_map{
    border-radius: var(--border-radius-max);
    width: 100%;
    height: 100%;
display: flex;
flex-direction: column;
justify-content: space-between;

align-items: flex-start;}
.navlist_map .title {
     color: #18191c;
    display: flex;
    align-items: center;
}
.navlist_map .title h3{
    font-size: 20px;
   

}
.navlist_map .title:hover{
    color: #0aaeec;
}
.navlist_map .items{
    /* background-color: darkcyan; */
display: grid;
grid-row-gap: 10px;
grid-column-gap: 10px;
grid-template-rows: repeat(2,1fr);
grid-template-columns: repeat(4,auto);
}
.items li a{
    font-size: 15px;
    color: #61666d;
}
.items li a:hover{
    color: #0aaeec;
}
</style>
