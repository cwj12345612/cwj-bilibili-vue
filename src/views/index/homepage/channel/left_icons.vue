<template>
<ul class="left_icons"

>
<li
v-for="index in 3"

>
 <a href="#">
    <div class="img">
        <img src="@/assets/images/头像.png" alt="">
    </div>
    <span>{{mock('@cword(2)')}}</span>
</a>
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
import  Mock  from 'mockjs';
const mock=(str)=>{
    return Mock.mock(str)
}
//#endregion

</script>
<style scoped>
.left_icons{

flex-grow: 0;
    /* background-color: teal; */
  display: grid;
  grid-template-columns: repeat(3,1fr);
  grid-template-rows: 100%;
  /* 
  :style="pageconfigStore.dynamicWH({normal:210,max:234,min:150},
  {normal:72,max:72,min:64})"
  */
max-width: 234px;
min-width: 150px;
width: 15vw;
max-height: 72px;
min-height:64px ;
height: 15vh;
}
.left_icons li{
  /*:style="pageconfigStore.dynamicWH({normal:46,max:46,min:40})"  */
    height: 100%;
    max-width: 46px;
    min-width: 40px;
 
}
.left_icons a{
    align-items: center;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
}
.left_icons a .img{
    width: 100%;
    height: calc(100% * calc(46 / 72));
    
}
.left_icons a .img img{
    border-radius: 50%;
}
.left_icons a span{
    color: #18191c;
}
</style>
