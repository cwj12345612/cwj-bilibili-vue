<template>
<div class="video_upload">

<div class="icon">
    <i class="colourless tianjia"></i>
    <span>拖拽到此处也可以上传</span>
</div>
<label class="upload" for="upload">
   <span>上传视频</span>
<input type="file" 
id="upload"
class="input"
accept=".mp4 , .flv , .mkv"
@change="change"
>
</label>
<div class="desc"></div>
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
const change=()=>{
    console.log('文件上传')
}
//#endregion

</script>
<style scoped>
.video_upload{
  
    background-color: #fff;
    width: 50vw;
    height: 60vh;
    margin:  0 auto;
margin-top: 20px;
border: 2px dashed #ccc;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

}
.video_upload .icon{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 10px;
}
.video_upload .upload{
    
    height: 40px;
    width: 150px;
    border-radius: 8px;
cursor: pointer;
    background-color: #0aaee0;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
}
.video_upload .upload span{
    color: #fff;
    font-size: 16px;
}
.video_upload .upload input{
    display: none;
}

</style>
