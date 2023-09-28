<template>
<div id="homepage">
    <homepage_banner></homepage_banner>
    <homepage_channel></homepage_channel>
  <homepage_main></homepage_main>
  <homepage_more v-for="index in 5"></homepage_more>
</div>
</template>
<script setup>
// #region  引入组件
import homepage_banner from  './banner'
import homepage_channel from  './channel'
import homepage_main from './main'
import homepage_more from './more'
//  #endregion

import {computed,ref,reactive,watch,toRef,toRefs,onMounted,onBeforeUnmount,} from 'vue'

import {useRoute,useRouter} from 'vue-router'

const route=useRoute()
const router=useRouter()

</script>
<style scoped>
#homepage{
  width: 100%;
   
    /* background-color: thistle; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: flex-start;
}
</style>
