<template>
<div class="playpage_danmulist">
    <div class="header"

    >
        <div class="left">
            <span>弹幕列表</span>
            <i class="colourless diandiandianshu setting"></i>
        </div>
        <div class="right" 
      
        @click="changedanmulist">
            <i class="colourless xialada"></i>
        </div>
    </div>
    
    <div class="danmulist none"
    ref="playpage_danmulist"
   
    >
        <div class="danmulist_header">
            <span class="time">时刻</span>
            <span class="content">弹幕内容</span>
            <span class="sendtime">发送时间</span>
        </div>
        <ul  class="list"
     
        >
            <li v-for="index in 60">
                <span class="time">00:42</span>
            <span class="content">{{ mock('@cword(5,20)') }}</span>
            <span class="sendtime">10-10 15:32</span>
            </li>
        </ul>
    <button class="danmuall">
        查看历史弹幕
    </button>

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
const playpage_danmulist=ref(null)
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}

//#endregion
const changedanmulist=(e)=>{
const button= e.currentTarget
const list= playpage_danmulist.value
// console.log(playpage_danmulist.value.classList)
if(button.className.indexOf('open')==-1){
   list.classList.add('show')
    list.classList.remove('none')
    button.classList.add('open')
}else{
    list.classList.remove('show')
    list.classList.add('none')
    button.classList.remove('open')
}
}
</script>
<style scoped>
.playpage_danmulist{
    width: 100%;
  display: flex;
  flex-direction: column;
    /* background-color: gold; */
    overflow: hidden;
    border-radius: var(--border-radius-min);
}
.playpage_danmulist .header{
    color: #18191c;
    padding: 0 15px;
    width: 100%;
    height: 44px;
    border-radius: var(--border-radius-min);
    background-color: rgb(241, 242, 243);
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.playpage_danmulist .header .left{
    /* background-color: brown; */
    height: 100%;
    width: 27%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.playpage_danmulist .header .left .setting{
    cursor: pointer;
}
.playpage_danmulist .header .left .setting:hover{
    color: rgb(0, 174, 236);
}
.playpage_danmulist .header .right{
    cursor: pointer;
    transition: all 0.5s;
}
.playpage_danmulist .header .right.open{
    transform: rotate(180deg);
}
.playpage_danmulist .danmulist {
   overflow: hidden;
    width: 100%;
    /* background-color: burlywood; */
 color: #61666d;
 display: flex;
 
 flex-direction: column;
/* transition: all 3s; */
/* 
:style="pageconfigStore.dynamicWH(undefined,{normal:376,max:962,min:376})"
 */
 max-height: 962px;
 min-height: 376px;
 height: 30vh;
}
.playpage_danmulist .danmulist .list::-webkit-scrollbar{display: none;}
.playpage_danmulist .danmulist.none{
    display: none;
}
.playpage_danmulist .danmulist.show{
    display: flex;
}
.playpage_danmulist .danmulist .danmulist_header{
    padding: 0 15px;
   flex-shrink: 0;
    font-size: 12px;
    /* background-color: aqua; */
    width: 100%;
    height: 32px;
    display: grid;
    grid-template-columns: 1fr 3.5fr 2fr;
    justify-content: center;
    align-items: center;
}
.playpage_danmulist .danmulist .danmuall{
    display: flex;
    align-items: center;
    justify-content: center;
    flex-shrink: 0;

    width: 100%;
    /* background-color: olivedrab; */
    height: 31px;
    border: none;
    background-color: #f1f2f3;
    border-radius: var(--border-radius-min);
}
.playpage_danmulist .danmulist .list {
    padding-left: 15px;
    font-size: 12px;
    width: 100%;
  flex-grow: 1;
    overflow: auto;

}

.playpage_danmulist .danmulist .list li{
min-height: 0;
    height: 24px;
    width: 100%;
    display: grid;
    grid-template-columns: 1fr 3.5fr  1.5fr;
    align-items: center;
    justify-content: flex-start;
   margin: 5px 0;
    grid-template-rows: 100%;
    
}
.playpage_danmulist .danmulist .list li .content{
  
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
</style>
