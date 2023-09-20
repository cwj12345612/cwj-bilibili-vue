<template>
    <div class="recommend_recommendvideo" 
    
    >
   <div class="img">
   <a href="#">
    <img src="@/assets/images/视频图片.png" alt="">
    <span class="duration">10:33:33</span>
   </a>
   </div>
   <div class="msg">
    <h3 class="title">
       <a href="#">
        {{ mock('@cword(5,50)') }}
       </a>
    </h3>
    <div class="upName">
      <a href="#">
        <i class="colourless UPzhu"></i>
       <span>{{ mock('@cword(2,10)') }}</span>
      </a>
    </div>
    <div class="other">
        <span>
            <i class="colourless bofangshu"></i>
            {{ mock({'num|10-3323':10}).num }}
        </span>
        <span>
            <i class="colourless danmushu"></i>
            {{ mock({'num|10-3323':10}).num }}
        </span>
    </div>
   </div>
   </div>
</template>
<script setup>
// #region  引入组件

//  #endregion

// #region 引入vue pinia 路由
import { computed, ref, reactive, watch, toRef, toRefs, onMounted, onBeforeUnmount, } from 'vue'
import { usepageconfigStore } from '@/pinia/pageconfig.js'
import { useRoute, useRouter } from 'vue-router'
const pageconfigStore = usepageconfigStore()
const route = useRoute()
const router = useRouter()
// #endregion

// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#endregion

</script>
<style scoped>
.recommend_recommendvideo {
    border-radius: var(--border-radius-min);
    width: 100%;
    margin-bottom: 12px;
    background-color: #ffffff;
    overflow: hidden;
    display: flex;
    justify-content: space-between;
/* 
:style="pageconfigStore.dynamicWH(undefined, { normal: 82.5, max: 107, min: 82.5 })"
*/
max-height: 107px;
min-height: 82.5px;
height: 11vh;
}
.recommend_recommendvideo .img{
       border-radius: var(--border-radius-min);
    width: 35%;
    height: 100%;
    overflow: hidden;
    position: relative;
}
.recommend_recommendvideo .img .duration{
    background: var(--transparency);
    position: absolute;
    right: 0;
    bottom: 0;
    color: #ffffff;
}
.recommend_recommendvideo .msg{
    height: 100%;
    width: 60%;
    /* background-color: blueviolet; */
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
}
.msg .title{
  color: #18191c;

    font-size: 15px;
    /* background-color: tan; */
    width: 100%;
    word-break: break-all;
    overflow: hidden;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;

}
.msg .title:hover a,
.upName:hover  a{
    color: rgb(0, 174, 236);
}
.upName{  
    color: #9499a0;
    font-size: 13px;

}
.msg .other{
    font-size: 13px;
    color: #9499a0;
    width: 60%;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
</style>
