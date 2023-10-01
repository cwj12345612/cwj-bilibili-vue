<template>
    <div class="carousel">

        <ul class="imgs" ref="carousel_imgs">
            <li v-for="(li, index) in list" 
            :key="li.id"
             v-show="index == carousel.index - 1">
                <img :src="li.src" alt="">
            </li>
        </ul>
        <div class="bottom">
            <div class="top">
                <h3>
                    <a href="#">
                        {{ mock('@cword(10)') }}
                    </a>
                </h3>
                <div class="button">
                    <button @click.prevent="skip(carousel.index==1 ? carousel.total:carousel.index-1)">
                        <i class="colourless fanhui"></i>
                    </button>
                    <button @click="skip(carousel.index==carousel.total ? 1 : carousel.index+1  )">
                        <i class="colourless gengduo"></i>
                    </button>
                </div>
            </div>
            <ol class="indicator">
                <li 
                @click="skip(index)"
                :class="`${index === carousel.index ? 'checked' : undefined}`" v-for="index in carousel.total"></li>
            </ol>
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
//#endregion
// #region  模拟数据 mockjs

import Mock from 'mockjs'

const mock = (str) => { return Mock.mock(str) }

//#region
//定时器
let Interval = null;
const carousel_imgs = ref(null)
const list = reactive([])
const carousel = reactive(
    {

        index: 1, //当前图片的索引
        total: 0, //图片个数
        left: 0,

    })
carousel.total = computed(() => {
    return list.length
})

//获取轮播图
onMounted(() => {
    const ls = [
        { id: mock('@id()'), src: require('@/assets/images/1.webp') },
        { id: mock('@id()'), src: require('@/assets/images/2.webp') },
        { id: mock('@id()'), src: require('@/assets/images/3.webp') },
        { id: mock('@id()'), src: require('@/assets/images/4.webp') },
        { id: mock('@id()'), src: require('@/assets/images/5.webp') },
        { id: mock('@id()'), src: require('@/assets/images/6.webp') },
        // { id: mock('@id()'), src: require('@/assets/images/7.webp') },
        // { id: mock('@id()'), src: require('@/assets/images/8.webp') },
        // { id: mock('@id()'), src: require('@/assets/images/9.webp') },
    ]

    ls.forEach(li => {
        list.push(li)
    })
})

onMounted(() => {
    // carousel_imgs.value.style.left='200px'
    ca()
})
//轮播图函数
const ca = () => {
    Interval = setInterval(() => {
        carousel.index += 1
        if (carousel.index > carousel.total) {
            carousel.index = 1
        }
       
    }, 3000);
}

const skip=(index)=>{
    // console.log(index)
    clearInterval(Interval) 
    carousel.index=index
 setTimeout(() => {
    ca()
 }, 1000);
   
}
// #endregion


</script>
<style scoped>
.carousel {
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

.carousel .imgs {
    /* width: 1000%; */
    /* width: auto; */
    width: 100%;
    height: 80%;
    position: absolute;
    left: 0;
    display: flex;

}

.carousel .imgs li {
    flex-grow: 1;
    flex-shrink: 0;
    width: 100%;
    height: 100%;

}

.bottom {
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

.bottom .top {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.bottom .top h3 a {
    color: #fff;
    font-size: 18px;
}

.bottom .top button {
    background-color: var(--transparency);
    color: #fff;
    border: none;
    padding: 5px;
    border-radius: 6px;
    margin: 0 5px;
}

.indicator {
    display: flex;
    align-items: center;
    justify-content: flex-start;
}

.indicator li {
    cursor: pointer;
    width: 12px;
    height: 12px;
    border-radius: 50%;
    margin: 4px;
    background-color: var(--transparency);
}

.indicator li.checked {
    transform: scale(1.5);
    background-color: #fff;
}</style>
