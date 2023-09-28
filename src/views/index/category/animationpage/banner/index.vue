<template>
<div class="banner"
:style="pageconfigStore.dynamicWH(undefined,{normal:480,max:850,min:440})"
>
<div class="img">
<a href="#">
    <img src="@/assets/images/anime1.webp" alt="">
</a>
</div>
<anime_cards></anime_cards>
</div>
</template>
<script setup>
// #region  引入组件
import anime_cards from './cards.vue'
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
.banner{
    width: 100%;
    /* background-color: aquamarine; */
    height: 480px;
position: relative;
display: flex;
flex-direction: column;
align-items: center;
}
.banner .img{
    width: 100%;
    height: 90%;
}


</style>
