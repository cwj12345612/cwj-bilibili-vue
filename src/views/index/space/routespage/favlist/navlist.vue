<template>
<div class="navlist">
    <div class="createlist">
        <div class="header">
            <h3>我创建的</h3>
            <span 
            class="more"
            :class="createlist.isshow ?'show':undefined"
            @click.prevent="createlist.isshow=!createlist.isshow"
            >
                <i class="colourless xialaxiao"></i>
            </span>
        </div>
        <div class="items"
        v-show="createlist.isshow"
        >
            <div class="create">
                <i class="colourless tianjia"></i>
                <span class="new">新建文件夹</span>
            </div>
            <ul class="list ">
                <li class="default">
                  <router-link 
                  to="/space/favlist/default" 
                 >
                    <i class="colourless shoucangjia"></i>
                    <span>默认收藏夹</span>
                    <span class="icon">
                        <i class="colourless diandiandianshu"></i>
                    </span>
                    <span class="count">{{ mock('@integer(10,1000)') }}</span>
                  </router-link>
                </li>
                <li 
                class="item"
                
                v-for="li in createlist.list"
                >
                  <router-link :to="li.href">
                    <i class="colourless shoucangjia"></i>
                    <span class="title">{{ li.title }}</span>
                    <span class="icon">
                        <i class="colourless diandiandianshu"></i>
                    </span>
                    <span class="count">{{ li.count }}</span>
                  </router-link>
                </li>
            </ul>
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
const createlist=reactive({
    isshow:true,
    list:[
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
        {id:mock('@id()'),title:mock('@cword(2,10)'),count:mock('@integer(10,1000)'),href:'/space/favlist/'+mock('@id()')},
    ]
})
//#endregion

</script>
<style scoped>
.navlist{
    flex-shrink: 0;
    
    /* background-color: teal; */
    background-color: #fff;
    height: 100%;
    width: 250px;
    padding-left: 20px;
    padding-right: 10px;
    padding-top: 20px;
border-right: 2px solid #e6e7e8;
}
.createlist{
    /* background-color: chocolate; */
    border-bottom: 2px solid #99a2aa;
}
.createlist .header{
    display: flex;
    align-items: center;
    justify-content: space-between;
    color: #99a2aa;
    margin-bottom: 15px;
}
.createlist .header .more{
  cursor: pointer;
  transition: all 0.3s;

}
.createlist .header .more.show{
    transform: rotate(180deg);
}
.createlist .items{
    transition: all 1s;
   max-height: calc(44px * 10);
    overflow: auto;
    /* background-color: darkkhaki; */
}
.createlist .items .create{
    height: 44px;
    /* background-color: cornflowerblue; */
    cursor: pointer;
   display: grid;
   gap: 5px;
   grid-template-columns: 1fr 5fr 1fr;
    color: #222;
    font-size: 14px;
    align-items: center;
    justify-content: center;
}
.createlist .items .create:hover{
    color: #0aaee0;
}
.createlist .items .list{
    background-color: #fff;
   /* height: 200px; */
}
.createlist .items .list li{
    overflow: hidden;
    width: 100%;
}
.createlist .items .list li:has(>a.router-link-active){
   
background-color: #0aaee0;
}
.createlist .items .list li a{
    height: 44px;
    display: grid;
    width: 100%;
    color: #222;
    /* background-color: darkcyan; */
    grid-template-rows: 100%;
gap: 5px;
grid-template-columns: 1fr 5fr 1fr;
align-items: center;
    justify-content: center;
   
}
.createlist .items .list li a .title{
    font-size: 14px;
    text-overflow: ellipsis;
    overflow: hidden;
    word-break: break-all;
    white-space: nowrap;
}
.createlist .items .list li a:hover{
    color: #222;
 
}

.createlist .items .list li:hover .count{
    display: none;
}
.createlist .items .list li:hover .icon{
    display: block;
}
.createlist .items .list li .icon{
    display: none;
}
.createlist .items .list li .count{
    display: block;

}
</style>
