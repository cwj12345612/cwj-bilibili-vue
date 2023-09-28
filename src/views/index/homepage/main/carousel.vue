<template>
<div class="carousel">

    <ul class="imgs" ref="carousel_imgs" id="carousel_imgs">
           <li v-for="(li,index) in list" :index="index"> <img  :src="li.src" alt=""></li>
    </ul>
    <div class="bottom">
        <div class="top">
            <h3>
               <a href="#">
                {{ mock('@cword(10)') }}
               </a>
            </h3>
            <div class="button">
                <button>
                    <i class="colourless fanhui"></i>
                </button>
                <button>
                    <i class="colourless gengduo"></i>
                </button>
            </div>
        </div>
        <ol class="indicator">
            <li :class="`${index === 3 ?'checked':undefined}`" v-for="index in 8"></li>
        </ol>
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
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock=(str)=>{return Mock.mock(str)}
const list=[
    {id:mock('@id()'),src:require('@/assets/images/1.webp')},
    {id:mock('@id()'),src:require('@/assets/images/2.webp')},
    {id:mock('@id()'),src:require('@/assets/images/3.webp')},
    {id:mock('@id()'),src:require('@/assets/images/4.webp')},
    {id:mock('@id()'),src:require('@/assets/images/5.webp')},
    {id:mock('@id()'),src:require('@/assets/images/6.webp')},
    {id:mock('@id()'),src:require('@/assets/images/7.webp')},
    {id:mock('@id()'),src:require('@/assets/images/8.webp')},
    {id:mock('@id()'),src:require('@/assets/images/9.webp')},
]
//#endregion

const carousel=reactive(
    {
    
    index:1, //当前图片的索引
    total:0, //图片个数
    setup:0,//步长
    left:0 //当前移动距离
})
carousel.total=computed(()=>{
    return list.length
})
//设置步长 为li的10分之1
carousel.setup=computed(()=>{
 
    // if(!carousel_imgs.value) return 0
   return carousel_imgs.value.querySelector('li').getBoundingClientRect().width / 10  
})
const ainame=()=>{
     Interval=setInterval(()=>{

    },100)
}
//定时器
let Interval=null;
// 整个轮播图的ul
const carousel_imgs=ref()

// #endregion


</script>
<style scoped>
.carousel{
    grid-column: span 2;
    grid-row: span 2;
    width: 100%;
    border-radius: var(--border-radius-max);
    /* overflow: hidden; */
    height: calc(calc(calc(100% - 20px) / 2) * 1.6 + 20px);
   /* background: var(--transparency); */
   position: relative;
   overflow: hidden;
}
.carousel .imgs{
    width: 1000%;
    height: 80%;
    position: absolute;
    left: 0;
display: flex;

}
.carousel .imgs li{

    flex-shrink: 0;
  
    height: 100%;
    width: 10%;
}
.bottom{
    position: absolute;
    bottom: 0;
    height: 20%;
    width: 100%;
    background: var(--transparency);
   padding: 5px 10px 15px;
   display: flex;
   flex-direction: column;
   justify-content: space-between;
}
.bottom .top{
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.bottom .top h3 a{
    color: #fff;
    font-size: 18px;
}
.bottom .top button{
    background-color:var(--transparency);
    color: #fff;
    border: none;
   padding: 5px;
   border-radius: 6px;
   margin: 0 5px;
}
.indicator{
    display: flex;
    align-items: center;
    justify-content: flex-start;
}
.indicator li{
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 4px;
    background-color: var(--transparency);
}
.indicator li.checked{
    transform: scale(1.5);
    background-color: #fff;
}
</style>
