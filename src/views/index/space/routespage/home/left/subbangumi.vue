<template>
<div class="subbangumi">
    <div class="header">
        <h3>订阅番剧</h3>
        <button>
            <span>更多</span>
            <i class="colourless gengduo"></i>
        </button>
    </div>
    <ul class="items">
        <li v-for="inde in 4">
            <div class="img">
            <a href="#">
                <img src="@/assets/images/spacepage/homepage/subbangumi1.webp" alt="">
            </a>
            </div>
            <div class="content">
                <h3>
                   <a href="#">
                    {{ mock('@cword(5,10)') }}
                   </a>
                </h3>
                <p>
                    {{ mock('@cword(1000)') }}
                </p>
            </div>
        </li>
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
.subbangumi{
    margin-top: 20px;
   
    width: 100%;
   padding-bottom: 30px;
   border-bottom: 1px solid #b8c0cc;
}
.subbangumi  .header{
    width: 100%;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: #fff;
    margin-bottom: 10px;
}
.header h3{
    font-size: 20px;
    font-weight: normal;
}
.header button {
    padding: 2px 5px;
    border-radius: 6px;
    border: 1px  solid #6d757a;
    color: #6d757a;
    background: none;
}
.header button:hover{
    color: #0aaee0;

    border-color: #0aaee0;
}
.items{
    /* background-color: cadetblue; */
    width: 100%;
  
    display: grid;
    gap: 20px;
    grid-template-columns: repeat(2,1fr);
    
}
.items li{
    /* background-color: blueviolet; */
    height: 144px;
    display: grid;
   grid-column-gap:20px ;
   grid-template-columns: 1fr 2.5fr;
   grid-template-rows: 100%;
}
.items li .img {
border-radius: 6px;
overflow: hidden;
}
.items li .content{
    /* background-color: chocolate; */
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;
}
.content h3 a{
    font-weight: normal;
font-size: 18px;
color: #222;
}
.content h3 a:hover{
    color: #0aaee0;
}
.content p{
    margin-top: 10px;
    font-size: 12px;
    color: #222;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;


}
</style>
