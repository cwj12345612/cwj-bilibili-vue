<template>
<ul class="leftmain_tags sq" >
<li v-for="index in mock({'num|20':7}).num" class="tag">
    <i class="colourless fenquxuanzhong"></i>
    <span>{{ mock('@cword(3,7)') }}</span>
</li>
<li class="more"  @click="changeHeight">
<i class="colourless xialaxiao" ></i>
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
const changeHeight=(e)=>{

 const ul=   e.currentTarget.parentElement

  if(ul.className.indexOf('sq')>-1){
    ul.classList.remove('sq')
    ul.classList.add('zk')
  }else{
    ul.classList.add('sq')
    ul.classList.remove('zk')
  }
}
</script>
<style scoped>
.leftmain_tags{
    width: 100%;
    /* height: 100px; */
/* background-color: aqua; */
display: flex;
flex-wrap: wrap;
padding-left: 5px;
padding-right: 30px;
position: relative;
overflow: hidden;
transition: all  0.5s;
border-bottom: 2px solid #f1f2f3;
}
.leftmain_tags.sq{
    height: 36px;
}
.leftmain_tags.zk{
    height: auto;
}
.leftmain_tags li{
    background-color: #f1f2f3;
    color: #61666d;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
}
.leftmain_tags li.tag{
    margin-bottom: 8px;
    border-radius: 12px;
    height: 28px;
    padding: 0 12px;
   
    margin-right: 8px;
}
li.more{
    right: 0;
    top: 0;
    position: absolute;
    height: 30px;
    width: 30px;
    border-radius: 50%;

}
</style>
